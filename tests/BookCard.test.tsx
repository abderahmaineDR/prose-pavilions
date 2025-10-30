import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookCard from '../src/components/BookCard';

/**
 * Unit tests for BookCard component
 * Tests rendering of book information and proper link generation
 */
describe('BookCard', () => {
  const mockBook = {
    id: '1',
    title: 'Test Book Title',
    author: 'Test Author',
    shortDescription: 'A brief description of the test book',
    price: 19.99,
    cover: 'https://example.com/cover.jpg',
    tags: ['Fiction', 'Classic'],
  };

  it('renders book title correctly', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Book Title')).toBeInTheDocument();
  });

  it('renders book author correctly', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });

  it('renders price correctly formatted', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });

  it('renders tags correctly', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Fiction')).toBeInTheDocument();
    expect(screen.getByText('Classic')).toBeInTheDocument();
  });

  it('renders cover image with correct alt text', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    const image = screen.getByAltText('Cover of Test Book Title by Test Author');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockBook.cover);
  });

  it('renders View Details button', () => {
    render(
      <BrowserRouter>
        <BookCard {...mockBook} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('View Details')).toBeInTheDocument();
  });
});
