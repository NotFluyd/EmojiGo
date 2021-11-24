import React from "react";
import Meta from "components/Meta";
import { requireAuth } from "util/auth";

function TestPage(props) {
  return <Meta title="Test" />;
}

export default requireAuth(TestPage);
