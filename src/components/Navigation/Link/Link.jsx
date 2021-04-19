import React from "react";

const Link = ({ href, children, datatestid }) => {
  const onClickHandler = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  const styles = {
      padding :"1rem 1.5rem",
      borderRadius : "10px",
      backgroundColor : "coral",
      margin : "0.5rem",
      textDecoration : "none"
  }

  return (
    <a data-testid={datatestid} style={styles} onClick={onClickHandler} href={href}>
      {children}
    </a>
  );
};

export default Link;
