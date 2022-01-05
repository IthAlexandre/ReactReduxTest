import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    useEffect(() => {
      shouldGoAway();
    }, []);

    useEffect(() => {
      shouldGoAway();
    }, [props.auth]);

    const shouldGoAway = () => {
      if (!props.auth) {
        props.history.push("/");
      }
    };

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
