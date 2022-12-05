
import { post } from "./index";

export function submitContact(form) {
  return post("/submitContact", form);
}
