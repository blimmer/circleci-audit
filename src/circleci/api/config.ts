import { OpenAPI } from "./generated";

export function configCircleCi(token: string) {
  OpenAPI.HEADERS = {
    "content-type": "application/json",
    "circle-token": token,
  };
}
