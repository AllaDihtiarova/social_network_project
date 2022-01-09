import { useState } from 'react';

import { Button } from 'components/Button';
import { Articles } from 'containers/Body/articles';
import { AddArticle } from 'containers/Body/addArticle';
import { Profile } from 'containers/Body/profile';

export function ButtonContainer({}) {
  const [showContent, setShowContent] = useState();

  const fetchComponent = event => {
    const { textContent } = event.target;

    setShowContent(textContent);
  };

  // const context = event => {
  //   const { textContent } = event.target;

  //   switch (textContent) {
  //     case 'Articles':
  //       <Articles />;
  //       break;

  //     case 'Add article':
  //       <AddArticle />;
  //       break;

  //     case 'Profile':
  //       <Profile />;
  //       break;

  //     default:
  //       return;
  //   }
  // };

  return (
    <>
      <Button text="Articles" onFetchComponent={fetchComponent}></Button>
      {showContent === 'Articles' ? <Articles /> : null}

      <Button text="Add article" onFetchComponent={fetchComponent} />
      {showContent === 'Add article' ? <AddArticle /> : null}

      <Button text="Profile" onFetchComponent={fetchComponent} />
      {showContent === 'Profile' ? <Profile /> : null}
    </>
  );
}
