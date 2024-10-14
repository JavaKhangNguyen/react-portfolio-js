import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '../Home'; // Adjust the import path as needed

// Mock the Left component to avoid DOM nesting issues and simulate download behavior
vi.mock('./components/home/Left', () => {
  return {
    __esModule: true,
    default: ({ handleContactClick }) => (
      <div>
        <button
          className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          onClick={handleContactClick}
          aria-label="Contact me button"
        >
          <span className="text-lg">Contact me</span>
          {/* Mocking FontAwesomeIcon to avoid nesting issues */}
          <span className="font-awesome-icon" />
        </button>
        
        {/* Mock Download CV Button */}
        <a
          href="/CV_NguyenPhucKhang.pdf"
          download="CV_NguyenPhucKhang.pdf"
          target="_blank"
          className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
          rel="noreferrer"
          aria-label="Download CV"
        >
          <button className="w-full h-full flex justify-center items-center gap-2">
            <span className="text-lg">Download CV</span>
            <span className="font-awesome-icon" />
          </button>
        </a>
      </div>
    ),
  };
});

describe('Home Component', () => {
  it('switch to Contact on Contact me button', () => {
    render(<Home />);
    
    // Find and click the About button
    const aboutButton = screen.getByRole('button', { name: /Contact me/i }); 
    fireEvent.click(aboutButton);

    // Verify if the About section is rendered
    const contactSection = screen.getByText('Contact'); 
    expect(contactSection).toBeInTheDocument();
  });

  
  it('Trigger download on Download CV button', () => {
    render(<Home />);

    // Find the download CV button
    const downloadButton = screen.getByRole('link', { name: /Download CV/i }); // Link role for <a> tag
    expect(downloadButton).toBeInTheDocument();

    // Simulate the click
    fireEvent.click(downloadButton);

    // Check if the download link is correct
    expect(downloadButton).toHaveAttribute('href', '/CV_NguyenPhucKhang.pdf');
    expect(downloadButton).toHaveAttribute('download', 'CV_NguyenPhucKhang.pdf');
  });
});

