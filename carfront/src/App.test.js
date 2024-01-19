// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';

// test('renders carfront', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/carshop/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('open add car modal form', async () => {
//   render(<App/>);
//   fireEvent.click(screen.getByText(/new car/i));
//   expect(screen.getByRole('dialog')).toHaveTextContent(/New Car/i);
// })

import TestRenderer from 'react-test-renderer';
import AddCar from './components/AddCar';

test('renders a snapshot', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
})