import React from 'react';

export function Switch({
  checked,
  onCheckedChange,
  className,
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  className?: string;
}) {
  // Render the native checkbox but keep it visually hidden while
  // using an accessible overlay so clicks/taps reliably toggle it.
  return (
    <label
      className={className}
      style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        // keep the checkbox focusable but visually hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          margin: 0,
          cursor: 'pointer',
        }}
      />

      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: 44,
          height: 26,
          background: checked ? '#2563eb' : '#d1d5db',
          borderRadius: 9999,
          position: 'relative',
          transition: 'background 150ms',
        }}
      >
        <span
          style={{
            display: 'block',
            width: 20,
            height: 20,
            background: '#fff',
            borderRadius: 9999,
            position: 'absolute',
            top: 3,
            left: checked ? 20 : 3,
            transition: 'left 150ms',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
          }}
        />
      </span>
    </label>
  );
}
