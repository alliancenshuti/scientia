import * as scheduler from "node-schedule"

export async function scheduleJob(callback,time) {
    console.log("scheduling wallpaper change")

    const rule = new scheduler.RecurrenceRule()

    Object.assign(rule, time)

    scheduler.scheduleJob(rule, callback)
}