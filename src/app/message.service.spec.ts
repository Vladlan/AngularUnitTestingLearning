// import { TestBed, inject } from '@angular/core/testing';
//
import { MessageService } from './message.service';
//
// describe('MessageService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MessageService]
//     });
//   });
//
//   it('should be created', inject([MessageService], (service: MessageService) => {
//     expect(service).toBeTruthy();
//   }));
// });


// Straight Jasmine testing without Angular's testing support
describe('MessageService', () => {
  let service: MessageService;
  beforeEach(() => { service = new MessageService(); });

  it('#should add to messages array "1" and "2" ', () => {
    service.add('1');
    service.add('2');
    expect(service.messages[0]).toBe('1');
    expect(service.messages[1]).toBe('2');
  });

  it('#method clear() should clear all messages', () => {
    service.add('1');
    service.add('2');
    expect(service.messages[1]).toBe('2');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
