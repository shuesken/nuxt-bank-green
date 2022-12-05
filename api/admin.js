
import { get, post } from "./index";

export function refreshBanks() {
    return post("/refreshBanks")
}

export function exportFAQ() {
    return get("/exportFAQ")
}

export function SyncFAQFromFile() {
    return post("/syncFAQFromFile")
}
