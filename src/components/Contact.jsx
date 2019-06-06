import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <p>Posted by: Hege Refsnes</p>
            <p>
              Contact information:{" "}
              <a href="mailto:someone@example.com">someone@example.com</a>.
            </p>
          </div>

          <p>
            <strong>Note:</strong> The footer tag is not supported in Internet
            Explorer 8 and earlier versions.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
