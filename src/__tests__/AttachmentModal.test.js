import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AttachmentModal from '../components/AttachmentModal/AttachmentModal';
import FindAttachment from '../components/AttachmentModal/FindAttachment';


describe('AttachmentModal', () => {
  it('renders the modal content correctly', () => {
    const close = jest.fn();

    render(<AttachmentModal show={true} onClose={close} />);

    expect(screen.getByText('Attachment Finder - Step 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close'));
    expect(close).toHaveBeenCalledTimes(1);

  });

  describe('FindAttachment', () => {
    it('should return matching indexes for valid answers', () => {
      const answers = {
        attach: 'Excavator',
        weight: 'Mini',
        flow: 'Standard',
        length: 'Short',
      };
  
      const expectedReturn = [{
        type: "Cone Splitter",
        name: "Example 1",
        price: 5000,
        compatible_attach: ["Excavator"],
        compatible_weight: ["Mini", "Medium"],
        compatible_flow: ["Standard", "High"],
        compatible_length: ["Short", "Medium", "Long"],
      }]; 
  
      const realReturn = FindAttachment(answers);
  
      expect(realReturn).toEqual(expectedReturn);
    });
  
    it('should return an empty array for invalid answers', () => {
      const answers = {
        attach: 'Excavator',
        weight: 'WrongWeight',
        flow: 'High',
        length: 'Medium',
      };
  
      const expectedReturn = [];
  
      const realReturn = FindAttachment(answers);
  
      expect(realReturn).toEqual(expectedReturn);
    });
  });
});
