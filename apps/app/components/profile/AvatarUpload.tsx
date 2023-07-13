'use client'

import React, {
  useEffect,
  useState
} from 'react';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/types/supabase';
import type { AccountProfile } from '@/types/account';

const AvatarUpload = ({
  uid,
  url,
  size,
  onUpload
}: {
  uid: string
  url: AccountProfile['avatar_url']
  size: number
  onUpload: (avatarUrl: string) => void
}) => {
  const supabase = createClientComponentClient<Database>();
  const [filePath, setFilePath] = useState<AccountProfile['avatar_url']>(url);
  const [avatarUrl, setAvatarUrl] = useState<AccountProfile['avatar_url']>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path);

        if (error) {
          throw error;
        }

        setAvatarUrl(URL.createObjectURL(data));
      } catch (error) {
        console.log('Error downloading image: ', error);
      }
    }

    if (filePath) {
      downloadImage(filePath)
    }
  }, [filePath, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      setFilePath(filePath);
      onUpload(filePath);
    } catch (error) {
      alert('Error uploading avatar!');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <Image
          width={size}
          height={size}
          src="https://placehold.co/150x150"
          alt="No Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      )}
      <div style={{ width: size }}>
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  )
};

export default AvatarUpload;