import app from "./app";
import { config } from "./config/config";

const PORT = config.get("port");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
