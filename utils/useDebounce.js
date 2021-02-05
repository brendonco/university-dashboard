import React from 'react';

// Debounce on key pressed
export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(
        () => {
            // Set debounce value after the specified delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // clear timer
            return () => {
                clearTimeout(handler);
            };
        },
        // Only re-call effect if value changes
        [value, delay]
    );

    return debouncedValue;
}
