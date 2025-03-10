import { createRequire } from 'module';
import Subscription from '../models/sub.model.js';
import dayjs from "dayjs";

const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log("Renewal date has passed for subscription", subscriptionId);
        return;
    }
});

async function fetchSubscription(context, subscriptionId) {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId)
            .populate('user', 'name email');
    });
}