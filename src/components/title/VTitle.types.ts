export interface TitleProps {
  title?: string
  size?: TitleSize
  tag?: TitleTag
}

export type TitleSize = 'sm' | 'md' | 'lg' | 'xl'
export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
