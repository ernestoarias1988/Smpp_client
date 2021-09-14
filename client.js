var smpp = require('smpp');
var session = smpp.connect({
	//url: 'smpp://localhost:2775',
	url: 'smpp://200.43.169.163:2775',
	auto_enquire_link_period: 10000
});
session.bind_transceiver({
	system_id: 'LocalizAR911',
	password: 'SaltaSmp'
}, function(pdu) {
	if (pdu.command_status == 0) {
		// Successfully bound
		session.submit_sm({
			destination_addr: '3874559982',
			short_message: 'Enviado desde mi casa'
		}, function(pdu) {
			if (pdu.command_status == 0) {
				// Message successfully sent
				console.log(pdu.message_id);
			}
		});
	}
});