import React from 'react';

const Card = ({ title, image, demoLink, codeLink }) => {
  // Inject CSS styles for buttons (scoped to this component)
  const skeuomorphicButtonGreenCSS = `
    .skeuomorphic-button-green {
      box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
      background: linear-gradient(to right, #6CB776, #4B9D6F, #3C8962); /* Greenish gradient */
      border-radius: 10px;
      padding: 10px 20px;
      font-weight: bold;
      transition: transform 0.2s, background 0.3s;
      color: white;
    }
    .skeuomorphic-button-green:hover {
      background: linear-gradient(to right, #4B9D6F, #3C8962, #6CB776); /* Adjusted hover gradient */
      transform: scale(1.05);
    }
    .skeuomorphic-button-green:active {
      box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
      transform: scale(0.95);
    }
  `;

  const skeuomorphicButtonGrayCSS = `
    .skeuomorphic-button-gray {
      box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
      background: linear-gradient(to right, #A0AEC0, #718096, #4A5568); /* Grayish gradient */
      border-radius: 10px;
      padding: 10px 20px;
      font-weight: bold;
      transition: transform 0.2s, background 0.3s;
      color: white;
    }
    .skeuomorphic-button-gray:hover {
      background: linear-gradient(to right, #718096, #4A5568, #A0AEC0); /* Adjusted hover gradient */
      transform: scale(1.05);
    }
    .skeuomorphic-button-gray:active {
      box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
      transform: scale(0.95);
    }
  `;

  // Inject CSS styles for the buttons
  const styleSheetGreen = React.useMemo(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = skeuomorphicButtonGreenCSS;
    document.head.appendChild(style);
    return style;
  }, [skeuomorphicButtonGreenCSS]);

  const styleSheetGray = React.useMemo(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = skeuomorphicButtonGrayCSS;
    document.head.appendChild(style);
    return style;
  }, [skeuomorphicButtonGrayCSS]);

  return (
    <div className="bg-blue-950 rounded-md shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex justify-between space-x-4 cursor-pointer">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 skeuomorphic-button-green"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
