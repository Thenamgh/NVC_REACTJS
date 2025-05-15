import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragBlockPalette from '../components/DragBlockPalette';
import DropEditor from '../components/DropEditor';
import RichEditor from './RichEditor';

const TipTapEditor = () => {
  return (
    <RichEditor />
  );
};

export default TipTapEditor;
