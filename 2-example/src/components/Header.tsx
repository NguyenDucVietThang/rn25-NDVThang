import * as React from "react";

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <>
        <div className="header">
          <h1 className="header_title pt-2 pb-2 m-0 ">The Walk</h1>
        </div>
        <button>Login</button>
      </>
    );
  }
}
