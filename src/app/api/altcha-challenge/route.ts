import { altcha } from "@/lib/altcha"

export async function GET(request: Request) {
  return altcha.challengeHandler(request)
}
