import React from "react";
import Meta from "components/Meta";
import DashboardSection from "components/DashboardSection";
import { requireAuth } from "util/auth";
import TeacherSection from "components/TeacherSection";

function TeacherPage(props) {
  return (
    <>
      <Meta title="Teacher Panel" />
      <TeacherSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Teacher Panel"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(TeacherPage);
