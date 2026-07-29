"use client";
import { Component, ReactNode } from "react";
import { ErrorMessage } from "./ErrorMessage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ProductList crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage message="Something went wrong while displaying products." />;
    }
    return this.props.children;
  }
}