import customizeHeader from './images/customizeHeader.png';
import './Customize.css';
import React, { useState, useEffect, useRef } from 'react';

const linkOptions = [
  { link: 'https://bible.usccb.org/daily-bible-reading', name: 'Today\'s Readings' },
  { link: 'https://www.usccb.org/sites/default/files/flipbooks/catechism/8/', name: 'Catechism - CCC' },
  { link: 'https://formed.org/', name: 'Formed' },
  { link: 'https://www.catholic.com/', name: 'Catholic Answers' },
  { link: 'https://www.ewtn.com/', name: 'EWTN' },
  { link: 'https://www.wordonfire.org/', name: 'Word on Fire' },
  { link: 'https://www.catholicnewsagency.com/', name: 'Catholic News Agency' },
  { link: 'https://www.catholicculture.org/', name: 'Catholic Culture' },
  { link: 'https://www.catholic.org/', name: 'Catholic Online' },
  { link: 'https://catholicexchange.com/', name: 'Catholic Exchange' },
  { link: 'https://www.catholiceducation.org/', name: 'Catholic Education Resource Center' },
  { link: 'https://www.catholicworldreport.com/', name: 'Catholic World Report' },
  { link: 'https://www.catholicdigest.com/', name: 'Catholic Digest' }
];

const Customize = () => {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [storedLinks, setStoredLinks] = useState([]);
  const linkInputRef = useRef(null);

  useEffect(() => {
    const existingLinks = JSON.parse(localStorage.getItem('homeLinks')) || [];
    setStoredLinks(existingLinks);
  }, []);

  useEffect(() => {
    const filterOptions = () => {
      const existingLinks = JSON.parse(localStorage.getItem('homeLinks')) || [];
      const existingLinksNames = existingLinks.map(link => link.name.toLowerCase());
      const options = linkOptions.filter(option => 
        !existingLinksNames.includes(option.name.toLowerCase()) &&
        option.name.toLowerCase().includes(link.toLowerCase())
      ).slice(0, 7);
      setFilteredOptions(options);
    };
    filterOptions();
  }, [link, storedLinks]);

  const handleAdd = () => {
    const existingLinks = JSON.parse(localStorage.getItem('homeLinks')) || [];
    const newLinks = [...existingLinks, { link, name }];
    localStorage.setItem('homeLinks', JSON.stringify(newLinks));
    setStoredLinks(newLinks);
    setLink('');
    setName('');
  };

  const handleDelete = (index) => {
    const existingLinks = JSON.parse(localStorage.getItem('homeLinks')) || [];
    const newLinks = existingLinks.filter((_, i) => i !== index);
    if (newLinks.length === 0) {
      localStorage.removeItem('homeLinks');
    } else {
      localStorage.setItem('homeLinks', JSON.stringify(newLinks));
    }
    setStoredLinks(newLinks);
  };

  const handleSelectOption = (option) => {
    setLink(option.link);
    setName(option.name);
    setShowDropdown(false);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
//      setShowDropdown(false);
    }
  };

  return (
    <div className="container">
      <img src={customizeHeader} alt="Bible Search"/>
      <br/>
      <div className="input-container" onBlur={handleBlur}>
        <input
          ref={linkInputRef}
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          placeholder="Enter link"
        />
        {showDropdown && (
          <div className="dropdown">
            <ul>
              {filteredOptions.map((option, index) => (
                <li key={index} onClick={() => handleSelectOption(option)}>
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <button onClick={handleAdd}>Add</button>

      {storedLinks.length > 0 && (
        <table className="link-list">
          <thead>
            <tr>
              <th className='linkColumn'>Link</th>
              <th className='actionColumn'>Action</th>
            </tr>
          </thead>
          <tbody>
            {storedLinks.map((linkObj, index) => (
              <tr key={index}>
                <td className='linkColumn'><a href={linkObj.link} target="_blank" rel="noopener noreferrer">{linkObj.name}</a></td>
                <td className='actionColumn'><button onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Customize;
