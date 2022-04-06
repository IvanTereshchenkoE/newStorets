import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

type ActivityNames = {
  [key: string]: string;
};
const ActivityObjects: ActivityNames = {
  Administration: "Administration",
  Analytics: "Analytics",
  Backend: "Backend",
  Design: "Design",
  Frontend: "Frontend",
  Management: "Management",
  Marketing: "Marketing",
  Testing: "Testing",
};

type Props = {
  handleSelectActivity(value: string[]): void;
};

type ActivityType = {
  [key: string]: boolean;
};

function FieldOfActivity({ handleSelectActivity }: Props) {
  const [listGroup, setListGroup] = useState<ActivityType>({
    Administration: false,
    Analytics: false,
    Backend: false,
    Design: false,
    Frontend: false,
    Management: false,
    Marketing: false,
    Testing: false,
  });

  return (
    <>
      <FormGroup>
        <strong>Сфера деятельности</strong>
        {Object.keys(ActivityObjects).map(act => (
          <FormControlLabel
            key={act}
            control={
              <Checkbox
                size="small"
                key={act}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const data = {
                    ...listGroup,
                    [act]: event.target.checked,
                  };
                  setListGroup(data);
                  let selectedActivity = Object.keys(data).filter(key => {
                    return data[key] === true;
                  });
                  handleSelectActivity(selectedActivity);
                }}
              />
            }
            label={ActivityObjects[act]}
          />
        ))}
      </FormGroup>
    </>
  );
}

export default FieldOfActivity;
