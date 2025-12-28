export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps<T = Record<string, never>> {
  params?: T;
  searchParams?: Record<string, string | string[] | undefined>;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export type Theme = 'light' | 'dark' | 'system';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
