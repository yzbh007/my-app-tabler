import React from 'react';
import TablerSpinner from './TablerSpinner';


function TablerButton({ block, icon: IconComponent, iconColor, text, color, loading, ...rest }) {
    let className = 'btn';

    if (color) {
        className += ` btn-${color}`;
    }
    if (block) {
        className += ' w-100';
    }
    if (iconColor) {
        className += ` btn-${iconColor}`;
    }

    return (
        <button className={className} {...rest}>
            {loading ? (
                <>
                    <TablerSpinner size="sm" color={color} className="me-2" />
                    {text}
                </>
            ) : (
                <>
                    {/* 直接使用 IconComponent */}
                    {IconComponent && <IconComponent className="me-2" />}
                    {text}
                </>
            )}
        </button>
    );
}

export default TablerButton;
