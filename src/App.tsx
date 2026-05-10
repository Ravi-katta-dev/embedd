// ... (existing routes)
// Add new routes for content tabs (no change needed as tabs are client-side)
<Route path="/module/:moduleId/topic/:topicId" element={<TopicView />} />