import React, { ReactNode } from 'react';

type ItemRendererFn<TItem, TRes> = (item: TItem, index: number) => TRes;

interface ItemRendererProps<TItem> {
  items: TItem[];
  onItemRender: ItemRendererFn<TItem, ReactNode>;
  onKeyExtract: ItemRendererFn<TItem, string>;
}

function ItemRenderer<TItem>({
  items,
  onItemRender,
  onKeyExtract,
}: ItemRendererProps<TItem>) {
  return (
    <>
      {items.map((item, index) => (
        <div key={onKeyExtract(item, index)}>{onItemRender(item, index)}</div>
      ))}
    </>
  );
}

export default ItemRenderer;
