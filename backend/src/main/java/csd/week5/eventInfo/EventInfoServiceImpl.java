package csd.week5.eventInfo;

import java.util.List;
import org.springframework.stereotype.Service;

import csd.week5.user.*;

@Service
public class EventInfoServiceImpl implements EventInfoService {

    private EventInfoRepository eventInfoRepo;

    public EventInfoServiceImpl(EventInfoRepository eventInfoRepo) {
        this.eventInfoRepo = eventInfoRepo;
    }

    @Override
    public List<EventInfo> listEventInfo() {
        return eventInfoRepo.findAll();
    }

    @Override
    public EventInfo getEventInfo(Long id) {
        return eventInfoRepo.findById(id).orElse(null);
    }

    @Override
    public EventInfo addEventInfo(EventInfo newEventInfo) {
        return eventInfoRepo.save(newEventInfo);
    }

    @Override
    public EventInfo updateEventInfo(Long id, EventInfo updatedEventInfo) {
        return eventInfoRepo.findById(id).map(existingEventInfo -> {
            existingEventInfo.setTitle(updatedEventInfo.getTitle());
            existingEventInfo.setEventDetail(updatedEventInfo.getEventDetail());
            existingEventInfo.setDate(updatedEventInfo.getDate());
            existingEventInfo.setTicketPricing(updatedEventInfo.getTitle());
            existingEventInfo.setTicketInfo(updatedEventInfo.getTitle());
            existingEventInfo.setEnRPolicy(updatedEventInfo.getEnRPolicy());
            existingEventInfo.setaPolicy(updatedEventInfo.getaPolicy());
            return eventInfoRepo.save(existingEventInfo);
        }).orElse(null);
    }

    @Override
    public void deleteEventInfo(Long id) {
        eventInfoRepo.deleteById(id);
    }
}