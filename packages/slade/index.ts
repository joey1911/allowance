export { Client } from './client';

export const getCardProduct = async () => {
  const response = await fetch('https://sandbox-api.marqeta.com/v3/cardproducts?sort_by=-lastModifiedTime', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from('223a7008-746b-4bb8-8c5b-e0f3ff12b84c:4f6c8903-5d66-47a5-a581-36b701019372').toString('base64')
    })
  });

  console.log(response.status);
  console.log(response.statusText);
  return response.json();
}

export const getUsers = async () => {
  const response = await fetch('https://sandbox-api.marqeta.com/v3/users?sort_by=-lastModifiedTime', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from('223a7008-746b-4bb8-8c5b-e0f3ff12b84c:4f6c8903-5d66-47a5-a581-36b701019372').toString('base64')
    })
  });

  console.log(response.status);
  console.log(response.statusText);
  return response.json();
}