// implementation of the logic of each of the application's functionalities
import * as tmData from '../data/tm-events-data.mjs'
//import * as mem from '../data/seca-data-mem.mjs'
import * as mem from '../data/seca-data-elastic.mjs'
import { errors } from '../common/errors.mjs';
// simplifies event information received from TM Api
function simplify_event_data(data) {
  const simplifiedData = {
    id: data?.id ?? null,
    name: data?.name ?? null,
    date: data?.dates?.start?.dateTime ?? null,
    segment: (data?.classifications && data.classifications[0]?.segment?.name) ?? null,
    genre: (data?.classifications && data.classifications[0]?.genre?.name) ?? null,
    venue: {
      name: (data?._embedded?.venues && data._embedded.venues[0]?.name) ?? null,
      country: (data?._embedded?.venues && data._embedded.venues[0]?.country?.name) ?? null,
      city: (data?._embedded?.venues && data._embedded.venues[0]?.city?.name) ?? null
    }
  };
  return simplifiedData;
}
// handles http request to TM api and response
export async function most_popular_events(limit, page, _tmData = tmData) {
  let rsp = await _tmData.most_popular_events(limit, page);
  let rsp_js = await rsp.json();
  let resumed_list = [];
  for (let event_full in rsp_js._embedded.events) {
    resumed_list.push(simplify_event_data(rsp_js._embedded.events[event_full]))
  }
  return resumed_list;
}
// handles http request to TM api and response
export async function events_by_name(name, limit, page, _tmData = tmData) {
  let rsp = await _tmData.events_by_name(name, limit, page)
  let rsp_js = await rsp.json();
  let resumed_list = [];
  for (let event_full in rsp_js._embedded.events) {
    resumed_list.push(simplify_event_data(rsp_js._embedded.events[event_full]))
  }
  return resumed_list;
}
// creates new group if user exists in the system
export async function new_group(name, description, token) {
  let userId = await mem.getUserId(token);
  return mem.new_group(name, description, userId)
}
// upgrades group if user exists in the system
export async function update_group(groupId, name, description, token) {
  let userId = await mem.getUserId(token);
  const _groupId = parseInt(groupId, 10);
  if (Number.isNaN(_groupId)) {
    throw errors.INVALID_ARGUMENT(`groupId: ${groupId} is not valid`);
  }
  return mem.update_group(groupId, name, description, userId)
}
// deletes group if user exists in the system
export async function delete_group(groupId, token) {
  let userId = await mem.getUserId(token);
  return mem.delete_group(groupId, userId)
}
// returns list of groups that the user belongs to
export async function list_all_groups(token) {
  let userId = await mem.getUserId(token);
  return mem.list_all_groups(userId)
}
// handles http request to TM api and response
// if eventData exists in memory skips TM api response
export async function addEventToGroup(token, groupId, eventId, limit, page, _tmData = tmData) {
  let userId = await mem.getUserId(token);
  const _groupId = parseInt(groupId, 10);
  if (Number.isNaN(_groupId)) {
    throw errors.INVALID_ARGUMENT(`groupId: ${groupId} is not valid`);
  }
  let idCheck = ((typeof (eventId) === 'string'));
  if (!idCheck) {
    throw errors.INVALID_ARGUMENT(`eventId: ${eventId} is not valid`);
  }
  let eventToAdd = "";
  if (mem.isEventInMemory(eventId) == false) {
    let rsp = await _tmData.events_by_id(eventId, limit, page)
    let rsp_js = await rsp.json();
    if (isValidEvent(rsp_js) == false) {
      throw errors.NOT_FOUND(`Event ${eventId}`)
    }
    for (let event_full in rsp_js._embedded.events) {
      eventToAdd = (simplify_event_data(rsp_js._embedded.events[event_full]))
    }
  }
  else {
    eventToAdd = mem.getEventFromMemory(eventId);
  }
  return mem.addEventToGroup(groupId, userId, eventToAdd)
}
// helper function to check if TM API response is a valid event
function isValidEvent(rsp) {
  const hasEmbedded = rsp.hasOwnProperty('_embedded');
  if (hasEmbedded == false) return false;
  const hasEmbeddedEvents = rsp._embedded.hasOwnProperty('events');
  if (hasEmbeddedEvents == false) return false;
  return true;
}
// deletes group if user exists in the system and belongs to group
export async function deleteEventFromGroup(token, groupId, eventId) {
  let userId = await mem.getUserId(token);
  const _groupId = parseInt(groupId, 10);
  if (Number.isNaN(_groupId)) {
    throw errors.INVALID_ARGUMENT(`groupId: ${groupId} is not valid`);
  }
  let idCheck = ((typeof (eventId) === 'string'));
  if (!idCheck) {
    throw errors.INVALID_ARGUMENT(`eventId: ${eventId} is not valid`);
  }
  return mem.deleteEventFromGroup(groupId, userId, eventId)
}
// returns list of groups that the user belongs to, including event details
export async function getGroupDetails(token, groupId) {
  let userId = await mem.getUserId(token);
  const _groupId = parseInt(groupId, 10);
  if (Number.isNaN(_groupId)) {
    throw errors.INVALID_ARGUMENT(`groupId: ${groupId} is not valid`);
  }
  return mem.getGroupDetails(groupId, userId)
}
// returns list of all groups that user belongs to
export async function getAllGroups(token) {
  let userId = await mem.getUserId(token);
  return mem.getAllGroups(userId)
}