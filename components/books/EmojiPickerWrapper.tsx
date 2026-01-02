'use client';
import React from 'react';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';

interface EmojiPickerWrapperProps {
    onEmojiSelect: (emoji: string) => void;
}

export default function EmojiPickerWrapper({ onEmojiSelect }: EmojiPickerWrapperProps) {
    return (
        <EmojiPicker
            onEmojiClick={(emojiData) => onEmojiSelect(emojiData.emoji)}
            theme={Theme.AUTO}
            emojiStyle={EmojiStyle.APPLE}
            searchDisabled={false}
            width="100%"
            height="100%"
            lazyLoadEmojis={true}
            skinTonesDisabled
            previewConfig={{ showPreview: false }}
        />
    );
}
