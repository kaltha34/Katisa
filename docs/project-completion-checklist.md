# Project completion checklist (internal)

Use this before closing a project and releasing the free InQRS card.

## Delivery

- [ ] Final product or campaign deliverables handed over
- [ ] Client training completed (software) or publishing access confirmed (marketing)
- [ ] Written handover notes shared
- [ ] Client sign-off recorded (email or signed note)
- [ ] Final payment received

## Free InQRS card (sister product)

Config lives in `src/lib/pricing.js` → `completionReward`.

- [ ] `completionReward.enabled` is true
- [ ] Project meets `minProjectValueLKR` (currently 0)
- [ ] Collect card details from client (name / business for standard design)
- [ ] Order / print **cardsPerProject** card(s) (currently 1)
- [ ] Dispatch within **5–7 working days** after sign-off + final payment
- [ ] Note: no cash value, not transferable; link client to https://idora.click

## Close-out

- [ ] Ask for testimonial + case-study permission if founding offer applies
- [ ] Archive scope, invoices, and access credentials securely
- [ ] Update `foundingOffer.spotsTaken` if a founding spot was used
