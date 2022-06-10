import Telnet from 'telnet-client';

const tryTelnet = (host, port, timeout) => {
  // const host = 'towel.blinkenlights.nl';
  // const host = 'www.kompas.com';
  // const host = 'api.klikbca.com';

  // const port = 23;
  // const port = 80;
  // const port = 443;
  console.info(`*** now trying to telnet ${host} ${port}`);

  const telnetConnection = new Telnet();

  telnetConnection.on('ready', (prompt) => {
    console.log('*** ready', prompt);
  });

  telnetConnection.on('timeout', () => {
    console.log('*** timeout');
    telnetConnection.end();
  });

  telnetConnection.on('close', () => {
    console.log('**** connection close ****');
  });

  telnetConnection.on('data', (data) => {
    console.log(`*** data: ${data}`);
  });

  telnetConnection.on('connect', () => {
    console.log('**** connect ****');
    // telnetConnection.write('login user pass\r\n');
  });

  telnetConnection.connect({
    host,
    port,
    // shellPrompt: '/ # ',
    timeout: timeout || 1500,
  });
};

export default tryTelnet;
