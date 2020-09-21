import React, { useRef, useLayoutEffect } from 'react';

const isRunning = animation => animation && animation.playState === 'running';

const Flipper = ({ className, children, ...rest }) => {
  const el = useRef();
  const cachedState = useRef();
  const animation = useRef();

  const movingState = el.current ? el.current.getBoundingClientRect() : {};

  useLayoutEffect(() => {
    const prevState = !isRunning(animation.current)
      ? cachedState.current
      : movingState;

    if (isRunning(animation.current)) {
      animation.current && animation.current.finish();
    }

    if (el.current) {
      const newState = el.current.getBoundingClientRect();

      if (prevState) {
        const deltaX = prevState.x - newState.x;
        const deltaY = prevState.y - newState.y;

        const transform = `translate(${deltaX}px, ${deltaY}px)`;

        animation.current = el.current.animate(
          [
            {
              transform,
              transformOrigin: 'top left',
            },
            {
              transform: 'none',
              transformOrigin: 'top left',
            },
          ],
          {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'both',
          },
        );
      }

      cachedState.current = newState;
    }
  });

  return (
    <div className={className} {...rest} ref={el}>
      {children}
    </div>
  );
};

export default Flipper;
