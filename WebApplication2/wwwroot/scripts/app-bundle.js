var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./web-api", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, web_api_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api, http) {
            this.api = api;
            this.http = http;
            this.configHttp();
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacts';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select', name: 'home' },
                { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' },
                { route: 'test', moduleId: 'test', name: 'test' },
                { route: 'beheer', moduleId: 'beheer', name: 'beheer' },
                { route: 'beheerevent', moduleId: 'beheerevent', name: 'beheerevent' },
                { route: 'media', moduleId: 'media', name: 'media' },
                { route: 'toegangscontrole', moduleId: 'toegangscontrole', name: 'toegangscontrole' },
                { route: 'verhuur', moduleId: 'verhuur', name: 'verhuur' },
                { route: 'reservering', moduleId: 'reservering', name: 'reservering' },
                { route: 'login', moduleId: 'login', name: 'login' },
                { route: 'toegangscontrole', moduleId: 'toegangscontrole', name: 'toegangscontrole' }
            ]);
            this.router = router;
        };
        App.prototype.configHttp = function () {
            this.http.configure(function (config) {
                config
                    .withBaseUrl('api/values/')
                    .withDefaults({
                    method: "POST",
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                    .withInterceptor({
                    request: function (request) {
                        console.log("Requesting " + request.method + " " + request.url);
                        return request;
                    },
                    response: function (response) {
                        console.log("Received " + response.status + " " + response.url);
                        return response;
                    }
                });
            });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_fetch_client_1.HttpClient])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFsRFksR0FBRztRQURmLDBCQUFNLENBQUMsZ0JBQU0sRUFBRSxpQ0FBVSxDQUFDO3lDQUlDLGdCQUFNLEVBQWdCLGlDQUFVO09BSC9DLEdBQUcsQ0FrRGY7SUFsRFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFdlYkFQSSB9IGZyb20gJy4vd2ViLWFwaSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KFdlYkFQSSwgSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwaTogV2ViQVBJLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5jb25maWdIdHRwKCk7XG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ0NvbnRhY3RzJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogJycsIG1vZHVsZUlkOiAnbm8tc2VsZWN0aW9uJywgdGl0bGU6ICdTZWxlY3QnLCBuYW1lOiAnaG9tZSd9LFxyXG4gICAgICAgICAgICB7IHJvdXRlOiAnY29udGFjdHMvOmlkJywgbW9kdWxlSWQ6ICdjb250YWN0LWRldGFpbCcsIG5hbWU6ICdjb250YWN0cycgfSxcbiAgICAgICAgICAgIHsgcm91dGU6ICd0ZXN0JywgbW9kdWxlSWQ6ICd0ZXN0JywgbmFtZTogJ3Rlc3QnIH0sXG4gICAgICAgICAgICB7IHJvdXRlOiAnYmVoZWVyJywgbW9kdWxlSWQ6ICdiZWhlZXInLCBuYW1lOiAnYmVoZWVyJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJ2JlaGVlcmV2ZW50JywgbW9kdWxlSWQ6ICdiZWhlZXJldmVudCcsIG5hbWU6ICdiZWhlZXJldmVudCcgfSxcbiAgICAgICAgICAgIHsgcm91dGU6ICdtZWRpYScsIG1vZHVsZUlkOiAnbWVkaWEnLCBuYW1lOiAnbWVkaWEnIH0sXG4gICAgICAgICAgICB7IHJvdXRlOiAndG9lZ2FuZ3Njb250cm9sZScsIG1vZHVsZUlkOiAndG9lZ2FuZ3Njb250cm9sZScsIG5hbWU6ICd0b2VnYW5nc2NvbnRyb2xlJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJ3Zlcmh1dXInLCBtb2R1bGVJZDogJ3Zlcmh1dXInLCBuYW1lOiAndmVyaHV1cicgfSxcbiAgICAgICAgICAgIHsgcm91dGU6ICdyZXNlcnZlcmluZycsIG1vZHVsZUlkOiAncmVzZXJ2ZXJpbmcnLCBuYW1lOiAncmVzZXJ2ZXJpbmcnIH0sXG4gICAgICAgICAgICB7IHJvdXRlOiAnbG9naW4nLCBtb2R1bGVJZDogJ2xvZ2luJywgbmFtZTogJ2xvZ2luJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJ3RvZWdhbmdzY29udHJvbGUnLCBtb2R1bGVJZDogJ3RvZWdhbmdzY29udHJvbGUnLCBuYW1lOiAndG9lZ2FuZ3Njb250cm9sZSd9XHJcbiAgICAgICAgXSk7XG5cclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cblxuICAgIGNvbmZpZ0h0dHAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG4gICAgICAgICAgICBjb25maWdcclxuICAgICAgICAgICAgICAgIC53aXRoQmFzZVVybCgnYXBpL3ZhbHVlcy8nKVxyXG4gICAgICAgICAgICAgICAgLndpdGhEZWZhdWx0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ0ZldGNoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAud2l0aEludGVyY2VwdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgJHtyZXF1ZXN0Lm1ldGhvZH0gJHtyZXF1ZXN0LnVybH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnVybH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('beheer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Account = (function () {
        function Account() {
        }
        return Account;
    }());
    var Beheer = (function () {
        function Beheer() {
            var acc = new Account();
            acc.ID = 1;
            acc.Naam = 'Redmar';
            acc.Password == 'geheim';
            acc.Plaats = 'Amsterdam';
            acc.Postcode = 'yoppiesaus';
            acc.Straat = 'superstraat';
            acc.Huisnummer = 5;
            this.accounts = [acc, acc, acc, acc];
        }
        return Beheer;
    }());
    exports.Beheer = Beheer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGVlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBU0EsQ0FBQztRQUFELGNBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQUVEO1FBR0k7WUFFSSxJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7WUFDekIsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDekIsR0FBRyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7WUFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDM0IsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSx3QkFBTSIsImZpbGUiOiJiZWhlZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBY2NvdW50IHtcbiAgICBJRDogbnVtYmVyO1xuICAgIE5hYW06IHN0cmluZztcbiAgICBQbGFhdHM6IHN0cmluZztcbiAgICBTdHJhYXQ6IHN0cmluZztcbiAgICBIdWlzbnVtbWVyOiBudW1iZXI7XG4gICAgUG9zdGNvZGU6IHN0cmluZztcbiAgICBFbWFpbDogc3RyaW5nO1xuICAgIFBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cblxuZXhwb3J0IGNsYXNzIEJlaGVlciB7XG4gICAgYWNjb3VudHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVEVTVERBVEFcbiAgICAgICAgdmFyIGFjYyA9IG5ldyBBY2NvdW50KCk7XG4gICAgICAgIGFjYy5JRCA9IDE7XG4gICAgICAgIGFjYy5OYWFtID0gJ1JlZG1hcic7XG4gICAgICAgIGFjYy5QYXNzd29yZCA9PSAnZ2VoZWltJztcbiAgICAgICAgYWNjLlBsYWF0cyA9ICdBbXN0ZXJkYW0nO1xuICAgICAgICBhY2MuUG9zdGNvZGUgPSAneW9wcGllc2F1cyc7XG4gICAgICAgIGFjYy5TdHJhYXQgPSAnc3VwZXJzdHJhYXQnO1xuICAgICAgICBhY2MuSHVpc251bW1lciA9IDU7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IFthY2MsIGFjYywgYWNjLCBhY2NdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('beheerevent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event = (function () {
        function Event() {
        }
        return Event;
    }());
    var Beheer = (function () {
        function Beheer() {
            var event = new Event();
            event.ID = 1;
            event.Naam = 'Superevent';
            event.Plaats = 'Amsterdam';
            this.events = [event, event, event, event];
        }
        return Beheer;
    }());
    exports.Beheer = Beheer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGVlcmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFJQSxDQUFDO1FBQUQsWUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBRUQ7UUFHSTtZQUVJLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztZQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLHdCQUFNIiwiZmlsZSI6ImJlaGVlcmV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnQge1xuICAgIElEOiBudW1iZXI7XG4gICAgTmFhbTogc3RyaW5nO1xuICAgIFBsYWF0czogc3RyaW5nO1xyXG59XG5cbmV4cG9ydCBjbGFzcyBCZWhlZXIge1xuICAgIGV2ZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBURVNUREFUQVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgZXZlbnQuSUQgPSAxO1xuICAgICAgICBldmVudC5OYWFtID0gJ1N1cGVyZXZlbnQnO1xuICAgICAgICBldmVudC5QbGFhdHMgPSAnQW1zdGVyZGFtJztcblxuICAgICAgICB0aGlzLmV2ZW50cyA9IFtldmVudCwgZXZlbnQsIGV2ZW50LCBldmVudF07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-detail',["require", "exports", "aurelia-framework", "./web-api", "./utility", "aurelia-fetch-client", "aurelia-event-aggregator", "./message"], function (require, exports, aurelia_framework_1, web_api_1, utility_1, aurelia_fetch_client_1, aurelia_event_aggregator_1, message_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api, ea, http) {
            this.api = api;
            this.ea = ea;
            this.http = http;
        }
        ContactDetail.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.routeConfig = routeConfig;
            return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new message_1.ContactViewed(_this.contact));
            });
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            var _this = this;
            console.log(this.contact);
            this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new message_1.ContactUpdated(_this.contact));
            });
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                if (!result) {
                    this.ea.publish(new message_1.ContactViewed(this.contact));
                }
                return result;
            }
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Z0JBQU0sRUFBRSwwQ0FBZSxFQUFFLGlDQUFVLEVBQUUsMkJBQUksQ0FBQzt5Q0FNckIsZ0JBQU0sRUFBYywwQ0FBZSxFQUFnQixpQ0FBVTtPQUw3RSxhQUFhLENBNEN6QjtJQTVDWSxzQ0FBYSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcclxuaW1wb3J0IHsgYXJlRXF1YWwgfSBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IHsgSHR0cENsaWVudCwganNvbiB9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7IENvbnRhY3RVcGRhdGVkLCBDb250YWN0Vmlld2VkIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmludGVyZmFjZSBDb250YWN0IHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBpbmplY3QoV2ViQVBJLCBFdmVudEFnZ3JlZ2F0b3IsIEh0dHBDbGllbnQsIGpzb24pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIHtcclxuICAgIHJvdXRlQ29uZmlnO1xyXG4gICAgY29udGFjdDogQ29udGFjdDtcclxuICAgIG9yaWdpbmFsQ29udGFjdDogQ29udGFjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogV2ViQVBJLCBwcml2YXRlIGVhOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucm91dGVDb25maWcgPSByb3V0ZUNvbmZpZztcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXRDb250YWN0RGV0YWlscyhwYXJhbXMuaWQpLnRoZW4oY29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdCA9IDxDb250YWN0PmNvbnRhY3Q7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUodGhpcy5jb250YWN0LmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3QpKTtcbiAgICAgICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFZpZXdlZCh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FuU2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0LmZpcnN0TmFtZSAmJiB0aGlzLmNvbnRhY3QubGFzdE5hbWUgJiYgIXRoaXMuYXBpLmlzUmVxdWVzdGluZztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhY3QpO1xyXG4gICAgICAgIHRoaXMuYXBpLnNhdmVDb250YWN0KHRoaXMuY29udGFjdCkudGhlbihjb250YWN0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0ID0gPENvbnRhY3Q+Y29udGFjdDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUNvbmZpZy5uYXZNb2RlbC5zZXRUaXRsZSh0aGlzLmNvbnRhY3QuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xuICAgICAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBDb250YWN0VXBkYXRlZCh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwodGhpcy5vcmlnaW5hbENvbnRhY3QsIHRoaXMuY29udGFjdCkpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBDb250YWN0Vmlld2VkKHRoaXMuY29udGFjdCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('contact-list',["require", "exports", "./web-api", "aurelia-framework", "aurelia-fetch-client", "aurelia-event-aggregator", "./message"], function (require, exports, web_api_1, aurelia_framework_1, aurelia_fetch_client_1, aurelia_event_aggregator_1, message_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api, ea, http) {
            var _this = this;
            this.api = api;
            this.ea = ea;
            this.http = http;
            this.selectedId = 0;
            ea.subscribe(message_1.TestEvent, function (msg) { return alert(msg.message); });
            ea.subscribe(message_1.ContactViewed, function (msg) { return _this.select(msg.contact); });
            ea.subscribe(message_1.ContactUpdated, function (msg) { return __awaiter(_this, void 0, void 0, function () {
                var data, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('GetContacts')];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, data.json()];
                        case 2:
                            x = _a.sent();
                            this.contacts = x;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        ContactList.prototype.created = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('GetContacts')];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, data.json()];
                        case 2:
                            x = _a.sent();
                            this.contacts = x;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        return ContactList;
    }());
    ContactList = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient])
    ], ContactList);
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFBLElBQWEsV0FBVztRQUlwQixxQkFBb0IsR0FBVyxFQUFVLEVBQW1CLEVBQVUsSUFBZ0I7WUFBdEYsaUJBa0JDO1lBbEJtQixRQUFHLEdBQUgsR0FBRyxDQUFRO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7WUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1lBRnRGLGVBQVUsR0FBRyxDQUFDLENBQUM7WUFHWCxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFTLEVBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBYSxFQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsU0FBUyxDQUFDLHdCQUFjLEVBQUUsVUFBTSxHQUFHOzs7O2dDQUdiLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFBOzttQ0FBcEMsU0FBb0M7NEJBRWpELHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0NBQWpCLFNBQWlCOzRCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7OztpQkFRckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVLLDZCQUFPLEdBQWI7Ozs7O2dDQUV5QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBQTs7bUNBQXBDLFNBQW9DOzRCQUVqRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dDQUFqQixTQUFpQjs0QkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7O1NBQ3JCO1FBRUQsNEJBQU0sR0FBTixVQUFPLE9BQU87WUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXBDQSxBQW9DQyxJQUFBO0lBcENZLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxnQkFBTSxFQUFFLDBDQUFlLEVBQUUsaUNBQVUsRUFBRSwyQkFBSSxDQUFDO3lDQUtyQixnQkFBTSxFQUFjLDBDQUFlLEVBQWdCLGlDQUFVO09BSjdFLFdBQVcsQ0FvQ3ZCO0lBcENZLGtDQUFXIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYkFQSSB9IGZyb20gJy4vd2ViLWFwaSc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIGpzb24gfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBDb250YWN0VXBkYXRlZCwgQ29udGFjdFZpZXdlZCwgVGVzdEV2ZW50IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbkBpbmplY3QoV2ViQVBJLCBFdmVudEFnZ3JlZ2F0b3IsIEh0dHBDbGllbnQsIGpzb24pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdCB7XHJcbiAgICBjb250YWN0cztcclxuICAgIHNlbGVjdGVkSWQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBXZWJBUEksIHByaXZhdGUgZWE6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGVhLnN1YnNjcmliZShUZXN0RXZlbnQsIG1zZyA9PiBhbGVydChtc2cubWVzc2FnZSkpO1xuICAgICAgICBlYS5zdWJzY3JpYmUoQ29udGFjdFZpZXdlZCwgbXNnID0+IHRoaXMuc2VsZWN0KG1zZy5jb250YWN0KSk7XG4gICAgICAgIGVhLnN1YnNjcmliZShDb250YWN0VXBkYXRlZCwgYXN5bmMgbXNnID0+IHtcblxuICAgICAgICAgICAgLy90aGlzLmFwaS5nZXRDb250YWN0TGlzdCgpLnRoZW4oY29udGFjdHMgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKTtcbiAgICAgICAgICAgIGxldCBkYXRhOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnR2V0Q29udGFjdHMnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB4ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdHMgPSB4O1xuXG5cbiAgICAgICAgICAgIC8vbGV0IGlkID0gbXNnLmNvbnRhY3QuaWQ7XG4gICAgICAgICAgICAvL2xldCBmb3VuZCA9IHRoaXMuY29udGFjdHMuZmluZCh4ID0+IHguaWQgPT0gaWQpO1xuXG4gICAgICAgICAgICAvLyBGb3VuZCBpcyB1bmRlZmluZWQgP1xuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGZvdW5kLCBtc2cuY29udGFjdCk7XHJcbiAgICAgICAgfSk7XG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgLy90aGlzLmFwaS5nZXRDb250YWN0TGlzdCgpLnRoZW4oY29udGFjdHMgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKTtcbiAgICAgICAgbGV0IGRhdGE6IFJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKCdHZXRDb250YWN0cycpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIHRoaXMuY29udGFjdHMgPSB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChjb250YWN0KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('login',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Login = (function () {
        function Login() {
        }
        return Login;
    }());
    exports.Login = Login;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFFQSxDQUFDO1FBQUQsWUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksc0JBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9naW4ge1xuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('media',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Comment = (function () {
        function Comment() {
        }
        return Comment;
    }());
    var Media = (function () {
        function Media() {
            var com = new Comment();
            com.ID = 1;
            com.text = "dit is een comment";
            this.comments = [com, com, com, com];
        }
        return Media;
    }());
    exports.Media = Media;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFHQSxDQUFDO1FBQUQsY0FBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBRUQ7UUFHSTtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO1lBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0wsWUFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksc0JBQUsiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb21tZW50IHtcbiAgICBJRDogbnVtYmVyO1xuICAgIHRleHQ6IHN0cmluZztcclxufVxuXG5leHBvcnQgY2xhc3MgTWVkaWEge1xuICAgIGNvbW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBjb20gPSBuZXcgQ29tbWVudCgpO1xuICAgICAgICBjb20uSUQgPSAxO1xuICAgICAgICBjb20udGV4dCA9IFwiZGl0IGlzIGVlbiBjb21tZW50XCI7XG5cbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtjb20sIGNvbSwgY29tLCBjb21dO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('message',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUpdated = (function () {
        function ContactUpdated(contact) {
            this.contact = contact;
        }
        return ContactUpdated;
    }());
    exports.ContactUpdated = ContactUpdated;
    var ContactViewed = (function () {
        function ContactViewed(contact) {
            this.contact = contact;
        }
        return ContactViewed;
    }());
    exports.ContactViewed = ContactViewed;
    var TestEvent = (function () {
        function TestEvent(message) {
            this.message = message;
        }
        return TestEvent;
    }());
    exports.TestEvent = TestEvent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFDSSx3QkFBbUIsT0FBTztZQUFQLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBSSxDQUFDO1FBQ25DLHFCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSx3Q0FBYztJQUkzQjtRQUNJLHVCQUFvQixPQUFPO1lBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUFJLENBQUM7UUFDcEMsb0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLHNDQUFhO0lBSTFCO1FBQ0ksbUJBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLENBQUM7UUFDTCxnQkFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBSFksOEJBQVMiLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250YWN0VXBkYXRlZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbnRhY3QpIHsgfVxyXG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Vmlld2VkIHtcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGNvbnRhY3QpIHsgfVxyXG59XG5cbmV4cG9ydCBjbGFzcyBUZXN0RXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlKSB7XG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('no-selection',["require", "exports", "aurelia-framework", "./web-api", "aurelia-event-aggregator", "./message", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, web_api_1, aurelia_event_aggregator_1, message_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
            this.email = "";
        }
        return Contact;
    }());
    var NoSelection = (function () {
        function NoSelection(api, ea, http) {
            this.api = api;
            this.ea = ea;
            this.http = http;
            this.message = "Please Select a Contact.";
            this.contact = new Contact();
        }
        Object.defineProperty(NoSelection.prototype, "canSave", {
            get: function () {
                return this.contact.firstName &&
                    this.contact.lastName &&
                    this.contact.email.search('@') > 0;
            },
            enumerable: true,
            configurable: true
        });
        NoSelection.prototype.save = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.newContact = new Contact();
                            this.newContact.email = this.contact.email;
                            this.newContact.firstName = this.contact.firstName;
                            this.newContact.lastName = this.contact.lastName;
                            this.newContact.phoneNumber = "test";
                            return [4 /*yield*/, this.http.fetch('AddContact', {
                                    body: aurelia_fetch_client_1.json(this.newContact)
                                })];
                        case 1:
                            _a.sent();
                            this.ea.publish(new message_1.ContactUpdated(this.newContact));
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NoSelection;
    }());
    NoSelection = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient])
    ], NoSelection);
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFBO1FBQUE7WUFHSSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRXZCLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFHRCxJQUFhLFdBQVc7UUFLcEIscUJBQW9CLEdBQVcsRUFBVSxFQUFtQixFQUFVLElBQWdCO1lBQWxFLFFBQUcsR0FBSCxHQUFHLENBQVE7WUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFpQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQVk7WUFKdEYsWUFBTyxHQUFHLDBCQUEwQixDQUFDO1lBQ3JDLFlBQU8sR0FBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSWpDLENBQUM7UUFFRCxzQkFBSSxnQ0FBTztpQkFBWDtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO29CQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDMUMsQ0FBQzs7O1dBQUE7UUFFSywwQkFBSSxHQUFWOzs7Ozs0QkFHSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzRCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs0QkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7NEJBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQzs0QkFFckMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO29DQUNoQyxJQUFJLEVBQUUsMkJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2lDQUM5QixDQUFDLEVBQUE7OzRCQUZGLFNBRUUsQ0FBQzs0QkFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Ozs7O1NBQ3hEO1FBQ0wsa0JBQUM7SUFBRCxDQTdCQSxBQTZCQyxJQUFBO0lBN0JZLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxnQkFBTSxFQUFFLDBDQUFlLEVBQUUsaUNBQVUsRUFBRSwyQkFBSSxDQUFDO3lDQU1yQixnQkFBTSxFQUFjLDBDQUFlLEVBQWdCLGlDQUFVO09BTDdFLFdBQVcsQ0E2QnZCO0lBN0JZLGtDQUFXIiwiZmlsZSI6Im5vLXNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcclxuaW1wb3J0IHsgYXJlRXF1YWwgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgQ29udGFjdFVwZGF0ZWQsIENvbnRhY3RWaWV3ZWQgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwganNvbiB9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuXHJcbmNsYXNzIENvbnRhY3Qge1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZyA9IFwiXCI7XG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZztcclxufVxyXG5cclxuQGluamVjdChXZWJBUEksIEV2ZW50QWdncmVnYXRvciwgSHR0cENsaWVudCwganNvbilcbmV4cG9ydCBjbGFzcyBOb1NlbGVjdGlvbiB7XHJcbiAgICBtZXNzYWdlID0gXCJQbGVhc2UgU2VsZWN0IGEgQ29udGFjdC5cIjtcbiAgICBjb250YWN0OiBDb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbiAgICBuZXdDb250YWN0OiBDb250YWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFdlYkFQSSwgcHJpdmF0ZSBlYTogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB9XG5cbiAgICBnZXQgY2FuU2F2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFjdC5maXJzdE5hbWUgJiZcbiAgICAgICAgICAgIHRoaXMuY29udGFjdC5sYXN0TmFtZSAmJlxuICAgICAgICAgICAgdGhpcy5jb250YWN0LmVtYWlsLnNlYXJjaCgnQCcpID4gMFxyXG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgLy90aGlzLmNvbnRhY3QgPSA8Q29udGFjdD4gYXdhaXQgdGhpcy5hcGkuZ2V0Q29udGFjdERldGFpbHMoMSk7IGFzeW5jXG5cbiAgICAgICAgdGhpcy5uZXdDb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbiAgICAgICAgdGhpcy5uZXdDb250YWN0LmVtYWlsID0gdGhpcy5jb250YWN0LmVtYWlsO1xuICAgICAgICB0aGlzLm5ld0NvbnRhY3QuZmlyc3ROYW1lID0gdGhpcy5jb250YWN0LmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5uZXdDb250YWN0Lmxhc3ROYW1lID0gdGhpcy5jb250YWN0Lmxhc3ROYW1lO1xuICAgICAgICB0aGlzLm5ld0NvbnRhY3QucGhvbmVOdW1iZXIgPSBcInRlc3RcIjtcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnQWRkQ29udGFjdCcsIHtcclxuICAgICAgICAgICAgYm9keToganNvbih0aGlzLm5ld0NvbnRhY3QpXHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBDb250YWN0VXBkYXRlZCh0aGlzLm5ld0NvbnRhY3QpKTtcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('reservering',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Account = (function () {
        function Account() {
        }
        return Account;
    }());
    var Reservering = (function () {
        function Reservering() {
            var acc = new Account();
            acc.ID = 1;
            acc.Naam = 'Redmar';
            acc.Password == 'geheim';
            acc.Plaats = 'Amsterdam';
            acc.Postcode = 'yoppiesaus';
            acc.Straat = 'superstraat';
            acc.Huisnummer = 5;
            this.accounts = [acc, acc, acc, acc];
        }
        return Reservering;
    }());
    exports.Reservering = Reservering;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFTQSxDQUFDO1FBQUQsY0FBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBRUQ7UUFHSTtZQUVJLElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQztZQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUN6QixHQUFHLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztZQUM1QixHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUMzQixHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUVuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxrQ0FBVyIsImZpbGUiOiJyZXNlcnZlcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjY291bnQge1xuICAgIElEOiBudW1iZXI7XG4gICAgTmFhbTogc3RyaW5nO1xuICAgIFBsYWF0czogc3RyaW5nO1xuICAgIFN0cmFhdDogc3RyaW5nO1xuICAgIEh1aXNudW1tZXI6IG51bWJlcjtcbiAgICBQb3N0Y29kZTogc3RyaW5nO1xuICAgIEVtYWlsOiBzdHJpbmc7XG4gICAgUGFzc3dvcmQ6IHN0cmluZztcclxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXJ2ZXJpbmcge1xuICAgIGFjY291bnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFRFU1REQVRBXG4gICAgICAgIHZhciBhY2MgPSBuZXcgQWNjb3VudCgpO1xuICAgICAgICBhY2MuSUQgPSAxO1xuICAgICAgICBhY2MuTmFhbSA9ICdSZWRtYXInO1xuICAgICAgICBhY2MuUGFzc3dvcmQgPT0gJ2dlaGVpbSc7XG4gICAgICAgIGFjYy5QbGFhdHMgPSAnQW1zdGVyZGFtJztcbiAgICAgICAgYWNjLlBvc3Rjb2RlID0gJ3lvcHBpZXNhdXMnO1xuICAgICAgICBhY2MuU3RyYWF0ID0gJ3N1cGVyc3RyYWF0JztcbiAgICAgICAgYWNjLkh1aXNudW1tZXIgPSA1O1xuXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBbYWNjLCBhY2MsIGFjYywgYWNjXTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('test',["require", "exports", "./message", "aurelia-framework", "aurelia-fetch-client", "aurelia-event-aggregator"], function (require, exports, message_1, aurelia_framework_1, aurelia_fetch_client_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
        }
        return Contact;
    }());
    var Account = (function () {
        function Account() {
        }
        return Account;
    }());
    var Test = (function () {
        function Test(ea, http) {
            this.ea = ea;
            this.http = http;
            this.message = 'This is a test page';
        }
        Test.prototype.test = function () {
            this.ea.publish(new message_1.TestEvent('Bericht van test class'));
        };
        Test.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        Test.prototype.getContacts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('Values')];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, data.json()];
                        case 2:
                            x = _a.sent();
                            this.message = x.toString();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Test.prototype.getContact = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('GetContact', {
                                body: aurelia_fetch_client_1.json('1')
                            })];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, data.json()];
                        case 2:
                            x = _a.sent();
                            this.message = x.firstName + " " + x.lastName + " " + x.email + " " + x.phoneNumber;
                            return [2 /*return*/];
                    }
                });
            });
        };
        Test.prototype.addContact = function (firstName, lastName, email, phoneNumber) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.c = new Contact();
                            this.c.firstName = firstName;
                            this.c.lastName = lastName;
                            this.c.email = email;
                            this.c.phoneNumber = phoneNumber;
                            return [4 /*yield*/, this.http.fetch('AddContact', {
                                    body: aurelia_fetch_client_1.json(this.c)
                                })];
                        case 1:
                            _a.sent();
                            this.activate();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Test.prototype.getAccount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('GetAccount', {
                                body: aurelia_fetch_client_1.json('2')
                            })];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, data.json()];
                        case 2:
                            x = _a.sent();
                            this.message = x.naam + x.email;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Test;
    }());
    Test = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, aurelia_fetch_client_1.HttpClient])
    ], Test);
    exports.Test = Test;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJO1FBRGhCLDBCQUFNLENBQUMsMENBQWUsRUFBRSxpQ0FBVSxFQUFFLDJCQUFJLENBQUM7eUNBS2QsMENBQWUsRUFBZ0IsaUNBQVU7T0FKeEQsSUFBSSxDQTBGaEI7SUExRlksb0JBQUkiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RFdmVudCB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBqc29uIH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5jbGFzcyBDb250YWN0IHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZztcclxufVxuXG5jbGFzcyBBY2NvdW50IHtcbiAgICBJRDogbnVtYmVyO1xuICAgIE5hYW06IHN0cmluZztcbiAgICBQbGFhdHM6IHN0cmluZztcbiAgICBTdHJhYXQ6IHN0cmluZztcbiAgICBIdWlzbnVtbWVyOiBudW1iZXI7XG4gICAgUG9zdGNvZGU6IHN0cmluZztcbiAgICBFbWFpbDogc3RyaW5nO1xuICAgIFBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIEh0dHBDbGllbnQsIGpzb24pXG5leHBvcnQgY2xhc3MgVGVzdCB7XG4gICAgbWVzc2FnZSA9ICdUaGlzIGlzIGEgdGVzdCBwYWdlJztcbiAgICBjOiBDb250YWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlYTogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcblxyXG4gICAgfVxuXG4gICAgdGVzdCgpIHtcbiAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBUZXN0RXZlbnQoJ0JlcmljaHQgdmFuIHRlc3QgY2xhc3MnKSk7XHJcbiAgICB9XG5cbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcblxyXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29udGFjdHMoKSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKCdWYWx1ZXMnKTtcclxuICAgICAgICBsZXQgeCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHgudG9TdHJpbmcoKTtcclxuICAgIH1cblxuICAgIGFzeW5jIGdldENvbnRhY3QoKSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKCdHZXRDb250YWN0Jywge1xyXG4gICAgICAgICAgICBib2R5OiBqc29uKCcxJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB4LmZpcnN0TmFtZSArIFwiIFwiICsgeC5sYXN0TmFtZSArIFwiIFwiICsgeC5lbWFpbCArIFwiIFwiICsgeC5waG9uZU51bWJlcjtcclxuICAgIH1cblxuICAgIGFzeW5jIGFkZENvbnRhY3QoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBob25lTnVtYmVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jID0gbmV3IENvbnRhY3QoKTtcbiAgICAgICAgdGhpcy5jLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5jLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIHRoaXMuYy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLmMucGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlcjtcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5odHRwLmZldGNoKCdBZGRDb250YWN0Jywge1xyXG4gICAgICAgICAgICBib2R5OiBqc29uKHRoaXMuYylcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KCkge1xyXG4gICAgICAgIGxldCBkYXRhOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnR2V0QWNjb3VudCcsIHtcclxuICAgICAgICAgICAgYm9keToganNvbignMicpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0geC5uYWFtICsgeC5lbWFpbDtcclxuICAgIH1cblxuICAgIC8qXG4gICAgYXN5bmMgZ2V0VmFsdWVzKCkge1xyXG4gICAgICAgIGxldCBkYXRhOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnVmFsdWVzJyk7XHJcbiAgICAgICAgbGV0IHggPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB4LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKCdHZXRWYWx1ZScsIHtcclxuICAgICAgICAgICAgYm9keToganNvbignMCcpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0geC54O1xyXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TnVtYmVyKCkge1xyXG4gICAgICAgIGxldCBkYXRhOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnTnVtYmVycycpO1xyXG4gICAgICAgIGxldCB4ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0geC50b1N0cmluZygpO1xyXG4gICAgfVxuXHJcbiAgICBhc3luYyBhZGRWYWx1ZSh2YWw6IHN0cmluZykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnQWRkVmFsdWUnLCB7XHJcbiAgICAgICAgICAgIGJvZHk6IGpzb24odmFsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH1cblxuICAgIGFzeW5jIGFkZE51bWJlcih2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnQWRkTnVtYmVyJywge1xyXG4gICAgICAgICAgICBib2R5OiBqc29uKHZhbClcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XG4gICAgKi9cbiAgICBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('toegangscontrole',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event = (function () {
        function Event() {
        }
        return Event;
    }());
    var Toegangscontrole = (function () {
        function Toegangscontrole() {
            var event = new Event();
            event.ID = 1;
            event.Naam = 'Superevent';
            event.Plaats = 'Amsterdam';
            this.events = [event, event, event, event];
        }
        return Toegangscontrole;
    }());
    exports.Toegangscontrole = Toegangscontrole;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZWdhbmdzY29udHJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUlBLENBQUM7UUFBRCxZQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFFRDtRQUdJO1lBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNiLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLDRDQUFnQiIsImZpbGUiOiJ0b2VnYW5nc2NvbnRyb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnQge1xuICAgIElEOiBudW1iZXI7XG4gICAgTmFhbTogc3RyaW5nO1xuICAgIFBsYWF0czogc3RyaW5nO1xyXG59XG5cbmV4cG9ydCBjbGFzcyBUb2VnYW5nc2NvbnRyb2xlIHtcbiAgICBldmVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVEVTVERBVEFcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIGV2ZW50LklEID0gMTtcbiAgICAgICAgZXZlbnQuTmFhbSA9ICdTdXBlcmV2ZW50JztcbiAgICAgICAgZXZlbnQuUGxhYXRzID0gJ0Ftc3RlcmRhbSc7XG5cbiAgICAgICAgdGhpcy5ldmVudHMgPSBbZXZlbnQsIGV2ZW50LCBldmVudCwgZXZlbnRdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xufTsiXSwic291cmNlUm9vdCI6InNyYyJ9

define('verhuur',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Materiaal = (function () {
        function Materiaal() {
        }
        return Materiaal;
    }());
    var Verhuur = (function () {
        function Verhuur() {
            var mat = new Materiaal();
            mat.ID = 1;
            mat.Naam = "USB";
            this.accountmateriaal = [mat, mat, mat, mat];
            this.materialen = [mat, mat, mat, mat];
        }
        return Verhuur;
    }());
    exports.Verhuur = Verhuur;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmh1dXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUdBLENBQUM7UUFBRCxnQkFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBRUQ7UUFLSTtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDMUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUlqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLDBCQUFPIiwiZmlsZSI6InZlcmh1dXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYXRlcmlhYWwge1xuICAgIElEOiBudW1iZXI7XG4gICAgTmFhbTogc3RyaW5nO1xyXG59XG5cbmV4cG9ydCBjbGFzcyBWZXJodXVyIHtcbiAgICBtYXRlcmlhbGVuO1xuICAgIGFjY291bnRtYXRlcmlhYWw7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgbWF0ID0gbmV3IE1hdGVyaWFhbCgpO1xuICAgICAgICBtYXQuSUQgPSAxO1xuICAgICAgICBtYXQuTmFhbSA9IFwiVVNCXCI7XG5cblxuXG4gICAgICAgIHRoaXMuYWNjb3VudG1hdGVyaWFhbCA9IFttYXQsIG1hdCwgbWF0LCBtYXRdO1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWxlbiA9IFttYXQsIG1hdCwgbWF0LCBtYXRdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 200;
    var id = 0;
    function getId() {
        return ++id;
    }
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDUixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUM3QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNKLFFBQVEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7d0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsYUFBQztJQUFELENBbERBLEFBa0RDLElBQUE7SUFsRFksd0JBQU0iLCJmaWxlIjoid2ViLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsYXRlbmN5ID0gMjAwO1xubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gZ2V0SWQoKXtcbiAgcmV0dXJuICsraWQ7XG59XG5cbmxldCBjb250YWN0cyA9IFtcbiAge1xuICAgIGlkOmdldElkKCksXG4gICAgZmlyc3ROYW1lOidKb2huJyxcbiAgICBsYXN0TmFtZTonVG9sa2llbicsXG4gICAgZW1haWw6J3RvbGtpZW5AaW5rbGluZ3MuY29tJyxcbiAgICBwaG9uZU51bWJlcjonODY3LTUzMDknXG4gIH0sXG4gIHtcbiAgICBpZDpnZXRJZCgpLFxuICAgIGZpcnN0TmFtZTonQ2xpdmUnLFxuICAgIGxhc3ROYW1lOidMZXdpcycsXG4gICAgZW1haWw6J2xld2lzQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J093ZW4nLFxuICAgIGxhc3ROYW1lOidCYXJmaWVsZCcsXG4gICAgZW1haWw6J2JhcmZpZWxkQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J0NoYXJsZXMnLFxuICAgIGxhc3ROYW1lOidXaWxsaWFtcycsXG4gICAgZW1haWw6J3dpbGxpYW1zQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J1JvZ2VyJyxcbiAgICBsYXN0TmFtZTonR3JlZW4nLFxuICAgIGVtYWlsOidncmVlbkBpbmtsaW5ncy5jb20nLFxuICAgIHBob25lTnVtYmVyOic4NjctNTMwOSdcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIFdlYkFQSSB7XG4gIGlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICBcbiAgZ2V0Q29udGFjdExpc3QoKXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHRzID0gY29udGFjdHMubWFwKHggPT4gIHsgcmV0dXJuIHtcbiAgICAgICAgICBpZDp4LmlkLFxuICAgICAgICAgIGZpcnN0TmFtZTp4LmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTp4Lmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOnguZW1haWxcbiAgICAgICAgfX0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250YWN0RGV0YWlscyhpZCl7XG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kKSkpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlQ29udGFjdChjb250YWN0KXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xuXG4gICAgICAgIGlmKGZvdW5kKXtcbiAgICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgICBjb250YWN0c1tpbmRleF0gPSBpbnN0YW5jZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSBnZXRJZCgpO1xuICAgICAgICAgIGNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9LCBsYXRlbmN5KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(['./elements/loading-indicator']);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFDcEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRkQsOEJBRUMiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XHJcbiAgICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFsnLi9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvciddKTtcclxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        return LoadingIndicator;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LoadingIndicator.prototype, "loading", void 0);
    LoadingIndicator = __decorate([
        aurelia_framework_1.noView(['nprogress/nprogress.css'])
    ], LoadingIndicator);
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLGdCQUFnQjtRQUQ3QjtZQUVZLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTNUIsQ0FBQztRQVBDLHlDQUFjLEdBQWQsVUFBZSxRQUFRO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDSCx1QkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVFc7UUFBVCw0QkFBUTs7cURBQWlCO0lBRGYsZ0JBQWdCO1FBRDVCLDBCQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO09BQ3ZCLGdCQUFnQixDQVU1QjtJQVZZLDRDQUFnQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHtiaW5kYWJsZSwgbm9WaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5Abm9WaWV3KFsnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnXSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3Ige1xyXG4gIEBiaW5kYWJsZSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGxvYWRpbmdDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgbnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./style.css\"></require>\r\n  <require from=\"./contact-list\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-user\"></i>\r\n        <span>4Events</span>\r\n      </a>\n      </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a href=\"#/login\">Login</a></li>\n      <li><a href=\"#/media\">Media</a></li>\n      <li><a href=\"#/beheer\">Beheer</a></li>\n      <li><a href=\"#/beheerevent\">Beheerevent</a></li>\n      <li><a href=\"#/reservering\">Reservering</a></li>\n      <li><a href=\"#/verhuur\">Verhuur</a></li>\n      <li><a href=\"#/toegangscontrole\">Toegangscontrole</a></li>\r\n    </ul>\r\n    </div>\r\n  </nav>\r\n\n  <loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator>\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!--<contact-list class=\"col-md-4\"></contact-list>-->\r\n      <router-view class=\"col-md-12\"></router-view>\r\n    </div>\r\n  </div>\n\n</template>\n"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\n  padding-top: 70px; }\n\nsection {\n  margin: 0 20px; }\n\na:focus {\n  outline: none; }\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px; }\n\n.no-selection {\n  margin: 20px; }\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px; }\n\n.panel {\n  margin: 20px; }\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white; }\n\n.button-bar > button {\n  float: right;\n  margin: 20px; }\n\nli.list-group-item {\n  list-style: none; }\n\nli.list-group-item > a {\n  text-decoration: none; }\n\nli.list-group-item.active > a {\n  color: white; }\n"; });
define('text!beheer.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\r\n    <h2>Account Beheer</h2>\r\n    <p>Hier is het mogelijk om een lijst van accounts te zien en om accounts te wijzigen en toe te voegen</p>\r\n    <table class=\"table table-condensed\">\r\n      <thead>\r\n        <tr>\r\n          <th>Naam</th>\r\n          <th>Plaats</th>\r\n          <th>Straat</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr repeat.for=\"account of accounts\">\r\n          <td><a href=\"#\">${account.Naam}</a></td>\n          <td>${account.Plaats}</td>\n          <td>${account.Straat}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\n\n  <div class=\"form-group\">\r\n    <label for=\"usr\">Name:</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"pwd\">Password:</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n  </div>\n  <div class=\"form-group\">\r\n    <label for=\"usr\">Adress:</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"pwd\">Last Name:</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n  </div>\n\n  <form>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n  </form>\r\n</template>"; });
define('text!beheerevent.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\r\n    <h2>Event Beheer</h2>\r\n    <p>Hier is het mogelijk om een lijst van events te zien en om events te wijzigen en toe te voegen</p>\r\n    <table class=\"table table-condensed\">\r\n      <thead>\r\n        <tr>\r\n          <th>Naam</th>\r\n          <th>Plaats</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr repeat.for=\"event of events\">\r\n          <td><a href=\"#\">${event.Naam}</a></td>\n          <td>${event.Plaats}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\n\n  <div class=\"form-group\">\r\n    <label for=\"usr\">Naam:</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"pwd\">Plaats:</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n  </div>\n\n  <form>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n  </form>\n\n</template>"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Profile</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form role=\"form\" class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">First Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Last Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Phone Number</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button-bar\">\r\n    <button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button>\r\n  </div>\r\n</template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"contact-list\">\r\n    <ul class=\"list-group\">\r\n      <li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\">\r\n        <a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\">\r\n          <h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4>\r\n          <p class=\"list-group-item-text\">${contact.email}</p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>"; });
define('text!login.html', ['module'], function(module) { module.exports = "<template>\n  <form>\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n      <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\r\n    </div>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n      <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\r\n    </div>\n\n    <br />\n\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n</template>"; });
define('text!media.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <blockquote repeat.for=\"comment of comments\">\r\n      <p>${comment.text}</p>\r\n      <footer>${comment.id}</footer>\r\n    </blockquote>\n  </div>\n\n  <br />\n\n  <h4>Post een comment.</h4>\n\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Text</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"text\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Categorie</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"categorie\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n   </form>\r\n</template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"no-selection text-center\">\r\n    <h2>${message}</h2>\r\n  </div>\n\n  <div class=\"form-group\">\r\n    <label for=\"firstName\">First Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" placeholder=\"first name\" class=\"form-control\" id=\"firstName\" value.bind=\"contact.firstName\">\n    </div>\r\n  </div>\n\n  <div class=\"form-group\">\r\n    <label for=\"lstName\">Last Name</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" placeholder=\"last name\" class=\"form-control\" id=\"lstName\" value.bind=\"contact.lastName\">\r\n    </div>\n   </div>\n\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" placeholder=\"email\" class=\"form-control\" id=\"email\" value.bind=\"contact.email\">\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"button-bar\">\r\n      <button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Make New Contact?</button>\r\n    </div>\n\n\r\n</template>"; });
define('text!reservering.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n      Event\r\n      <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li repeat.for=\"event of events\"><a href=\"#\">${event.Naam}</a></li>\r\n    </ul>\r\n  </div>\n\n  <br />\n\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n      Plek\r\n      <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li repeat.for=\"plek of plekken\"><a href=\"#\">${plek.Naam}</a></li>\r\n    </ul>\r\n  </div>\n\n  <br />\n\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n      Accounts\r\n      <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li repeat.for=\"account of accounts\"><a href=\"#\">${account.Naam}</a></li>\r\n    </ul>\r\n  </div>\n\n  <br />\n\n  <form>\n    <button type=\"submit\" class=\"btn btn-default\">Reserveer</button>\n  </form>\n\n</template>"; });
define('text!test.html', ['module'], function(module) { module.exports = "<template>\n\n  <div class=\"test text-center\">\r\n    <h2>${message}</h2>\r\n  </div>\n\n  <div class=\"button-bar\">\r\n    <button class=\"btn btn-success\" click.delegate=\"test()\">Test</button>\r\n  \n    <input type=\"button\" class=\"btn btn-default btn-lg\" click.delegate=\"getAccount()\" value=\"Get Account\" />\n    <input type=\"button\" class=\"btn btn-default btn-lg\" click.delegate=\"addContact('Red', 'Red', 'Red', 'Red')\" value=\"Add Contact\" />\n  </div>\n\n</template>"; });
define('text!toegangscontrole.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\r\n    <h2>Toegangscontrole Event Lijst</h2>\r\n    <p>Een lijst van events hierin kun je de lijst van bezoekers zien.</p>\r\n    <table class=\"table table-condensed\">\r\n      <thead>\r\n        <tr>\r\n          <th>Naam</th>\r\n          <th>Plaats</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr repeat.for=\"event of events\">\r\n          <td><a href=\"#\">${event.Naam}</a></td>\r\n          <td>${event.Plaats}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\n</template>"; });
define('text!verhuur.html', ['module'], function(module) { module.exports = "<template>\n\n  <h6>Account Materiaal</h6>\n  <div>\n  <table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Naam</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr repeat.for=\"acc of accountmateriaal\">\r\n        <td><a href=\"#\">${materiaal.ID}</a></td>\r\n        <td>${materiaal.Naam}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\n\n  <form>\r\n    <button type=\"submit\" class=\"btn btn-default\">Inleveren</button>\n    <button type=\"submit\" class=\"btn btn-default\">Verhuur</button>\r\n  </form>\n\n  <h6>Materiaal</h6>\n  <div>\r\n    <table class=\"table table-condensed\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Naam</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr repeat.for=\"materiaal of materialen\">\r\n          <td><a href=\"#\">${materiaal.ID}</a></td>\r\n          <td>${materiaal.Naam}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\n\n</template>"; });
//# sourceMappingURL=app-bundle.js.map