import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

type ActivityNames = {
  [key: string]: string;
};
const ActivityObjects: ActivityNames = {};

const acts = [
  "Testing",
  "Frontend",
  "Design",
  "Marketing",
  "Administration",
  "Backend",
  "Analytics",
  "Management",
];
{
  /* по идеи этот массив должен с бэка прилетать*/
}

acts.map(act => (ActivityObjects[act] = act));

type Props = {
  handleSelectActivity(value: string[]): void;
};

type ActivityType = {
  [key: string]: boolean;
};

function FieldOfActivity({ handleSelectActivity }: Props) {
  let perListGroup: ActivityType = {};
  acts.map(act => (perListGroup[act] = false));
  const [listGroup, setListGroup] = useState<ActivityType>(perListGroup);

  return (
    <>
      <FormGroup>
        <strong>Сфера деятельности</strong>
        {acts.map(act => (
          <FormControlLabel
            key={act}
            control={
              <Checkbox
                size="small"
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
