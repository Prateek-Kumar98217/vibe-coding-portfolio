# Creepy Eyes Animation

A horror-themed background animation featuring glowing, blinking eyes that create an eerie atmosphere. The eyes float, blink, and glow with a red hue, creating a spooky effect.

## Features

- Floating animation
- Independent blinking
- Red glow effect
- Random movement
- Staggered animations
- Background noise texture

## Implementation

### CSS Animation

```css
@keyframes blink {
  0%, 48%, 52%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.1);
  }
}

@keyframes float-eyes {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(5px, -5px);
  }
  50% {
    transform: translate(0, -10px);
  }
  75% {
    transform: translate(-5px, -5px);
  }
}

@keyframes glow-eyes {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 0, 0, 0.9);
  }
}

.creepy-eyes {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

.eye {
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #ff0000, #990000);
  border-radius: 50%;
  animation: float-eyes 8s ease-in-out infinite, glow-eyes 2s ease-in-out infinite;
  border: 2px solid rgba(255, 0, 0, 0.5);
}

.eye::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 50%;
  top: 25%;
  left: 25%;
  animation: blink 4s infinite;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.eye::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  top: 30%;
  left: 30%;
  animation: blink 4s infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
```

### HTML Structure

```html
<div className="creepy-eyes">
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
  <div className="eye"></div>
</div>
```

## How It Works

1. **Base Setup**:
   - Fixed positioning for full-screen coverage
   - Multiple eyes with different positions
   - Layered animations for complexity
   - Subtle opacity for background effect

2. **Animation Mechanism**:
   - Floating movement with random timing
   - Independent blinking for each eye
   - Glow effect with pulsing intensity
   - Staggered animation delays

3. **Visual Effects**:
   - Red gradient for eye color
   - White reflection highlight
   - Glowing border effect
   - Background noise texture

4. **Interactive Features**:
   - Smooth transitions
   - Random movement patterns
   - Independent eye behavior
   - Layered visual effects

## Current Limitations

1. **Performance**:
   - Multiple animated elements
   - Complex shadow effects
   - Multiple layers of animations
   - Background noise texture

2. **Browser Support**:
   - Some effects may not work in older browsers
   - Shadow performance varies
   - Animation smoothness varies

3. **Accessibility**:
   - May cause motion sickness
   - Could be distracting
   - No reduced motion support

## Future Improvements

1. **Performance Optimization**:
   ```css
   .eye {
     will-change: transform;
     transform: translateZ(0);
     backface-visibility: hidden;
   }
   ```

2. **Accessibility**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .creepy-eyes {
       display: none;
     }
   }
   ```

3. **Customization**:
   ```css
   .eye {
     --eye-color: #ff0000;
     --eye-size: 60px;
     --glow-intensity: 30px;
     --blink-timing: 4s;
   }
   ```

4. **Variations**:
   - Add more eye patterns
   - Implement different movement patterns
   - Add interaction with mouse movement
   - Create different color schemes

## Usage Example

```jsx
const CreepyEyes = () => {
  return (
    <div className="creepy-eyes">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="eye" />
      ))}
    </div>
  );
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- TailwindCSS 