import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ChipProps {
  tags: string[];
}

const ClickableChips: React.FC<ChipProps> = ({ tags }) => {
  // Destructure tags correctly
  const handleClick = (tag: string) => {
    console.info(`You clicked the Chip: ${tag}`);
  };

  return (
    <Stack direction="row" spacing={1}>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          variant="outlined"
          onClick={() => handleClick(tag)} // Pass tag value
          className="cursor-pointer hover:bg-gray-100"
        />
      ))}
    </Stack>
  );
};

export default ClickableChips;
