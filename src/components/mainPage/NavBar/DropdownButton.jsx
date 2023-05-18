import React, { useState } from 'react';
import DropDownControls from 'components/dropdowns/DropDownControls';

const DropdownButton = ({
  onMouseOver,
  optionsArray,
  buttonText,
  ButtonIcon,
  ButtonActiveIcon,
}) => {
  const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [myMenuSelectedOption, setMyMenuSelectedOption] = useState('');
  const [hoveredOption, setHoveredOption] = useState('');

  const tabClass =
    'flex-shrink-0 text-r2d2834 hover:text-white relative flex flex-col items-center justify-center cursor-pointer';
  const selectedTabClass =
    'flex-shrink-0 relative flex flex-col items-center justify-center cursor-pointer text-white cursor-pointer';

  const myMenuButton = (
    <div
      style={{
        color: isMyMenuOpen ? '#ffffff' : '#5e399a',
        background: isMyMenuOpen ? '#5323a0' : 'none',
        height: '85px',
        marginTop: '-4px',
      }}
      className={`w-80px hover:filter hover:brightness-150 ${isMyMenuOpen ? selectedTabClass : tabClass}`}
      onMouseOver={onMouseOver}
    >
      <div className='flex justify-center w-48px h-48px ml-px mt-2px'>
        <img
          className='object-none'
          src={isMyMenuOpen ? ButtonActiveIcon : ButtonIcon}
          alt='my menu'
        />
      </div>
      <span
        style={{
          marginBottom: '0px',
          color: isMyMenuOpen ? '#ffffff' : '#5e399a',
        }}
        className='cursor-pointer font-spoqaMedium text-14px tracking-tight -mt-3px'
      >
        {buttonText}
      </span>
    </div>
  );

  const dropDownCellClass = 'flex w-full h-24px items-center pl-16px';
  const searchDropdown = (
    <>
      <div className='arrow_box'></div>
      <div
        style={{
          boxShadow: '1px 1.732px 10px 0px rgba(0, 0, 0, 0.5)',
          width: '123px',
        }}
        // TODO: check the style of the dropdown
        className='flex flex-col items-center justify-center py-7px overflow-hidden rounded-4px font-spoqaMedium text-14px tracking-tight bg-white'
      >
        <div className='w-full h-full overflow-x-hidden'>
          {optionsArray.map((option) => {
            const isOptionHovered = hoveredOption === option.text;
            return (
              <button
                key={option.id}
                className={dropDownCellClass}
                style={{
                  background: isOptionHovered
                    ? 'linear-gradient(to right, #9d3bbb, #5423a0)'
                    : '',
                  color: isOptionHovered ? 'white' : '#666666',
                }}
                onClick={() => {
                  setMyMenuSelectedOption(option.text);
                  setIsMyMenuOpen(false);
                }}
                onMouseOver={() => setHoveredOption(option.text)}
                onMouseLeave={() => setHoveredOption('')}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        style={{ height: '82px' }}
        className='relative flex justify-between flex-row flex-shrink-0'
      >
        <div className='flex items-center flex-shrink-0'>
          <DropDownControls
            buttonChild={myMenuButton}
            isDropdownOpen={isMyMenuOpen}
            setDropdownOpen={setIsMyMenuOpen}
            onClick={() => setIsMyMenuOpen(true)}
            onClose={() => setIsMyMenuOpen(false)}
            classes='left-0 mt-82px sm:mt-82px'
          >
            {searchDropdown}
          </DropDownControls>
        </div>
      </div>
    </>
  );
};

export default DropdownButton;
