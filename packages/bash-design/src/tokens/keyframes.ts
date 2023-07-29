const keyframes = {
  enterFromRight: {
    '0%': {
      transform: 'translateX(200px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1
    }
  },
  enterFromLeft: {
    '0%': {
      transform: 'translateX(-200px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1
    }
  },
  exitToRight: {
    '0%': {
      transform: 'translateX(0)',
      opacity: 1
    },
    '100%': {
      transform: 'translateX(200px)',
      opacity: 0
    }
  },
  exitToLeft: {
    '0%': {
      transform: 'translateX(0)',
      opacity: 1
    },
    '100%': {
      transform: 'translateX(-200px)',
      opacity: 0
    }
  },
  fadeIn: {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },
  fadeOut: {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  },
  scaleIn: {
    '0%': {
      transform: 'rotateX(-30deg) scale(0.9)',
      opacity: 0
    },
    '100%': {
      transform: 'rotateX(0deg) scale(1)',
      opacity: 1
    }
  },
  scaleOut: {
    '0%': {
      transform: 'rotateX(0deg) scale(1)',
      opacity: 1
    },
    '100%': {
      transform: 'rotateX(-10deg) scale(0.95)',
      opacity: 0
    }
  },
  contentShow: {
    '0%': {
      opacity: 0,
      transform: 'translate(-50%, -48%) scale(.96)'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)'
    }
  }
};

export default keyframes;