import React, { Component } from "react";
import PropTypes from "prop-types";

// Class-based component demonstrating lifecycle and PropTypes
class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Fetching user status..." };
  }

  componentDidMount() {
    // After 2 seconds update status to "Active User"
    this.timer = setTimeout(() => {
      this.setState({ status: "Active User" });
    }, 2000);
  }

  componentWillUnmount() {
    // cleanup timer if unmounted
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    const { userId } = this.props;
    return (
      <div className="card" style={{ width: "320px" }}>
        <p>
          <strong>User ID:</strong> {userId}
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.05rem" }}>{this.state.status}</p>
      </div>
    );
  }
}

// PropTypes validation
UserStatus.propTypes = {
  userId: PropTypes.number.isRequired,
};

// Page wrapper (passes numeric userId)
export default function Q3_UserStatus({ userId = 101 }) {
  return (
    <div>
      <h2>Q3 — UserStatus (Class Component)</h2>
      <UserStatus userId={userId} />
    </div>
  );
}
