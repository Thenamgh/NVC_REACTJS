import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ResizableImageComponent from './ResizableImageComponent';

export const ResizableImage = Node.create({
  name: 'resizableImage',

  group: 'block',
  draggable: true,
  inline: false,
  atom: true,

  addAttributes() {
    return {
      src: {},
      width: {
        default: 'auto',
      },
    };
  },

  parseHTML() {
    return [{ tag: 'resizable-image' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageComponent);
  },
});
