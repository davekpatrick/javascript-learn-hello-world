// 
import fetch from 'node-fetch'

(async () => {
    var urlProtocal = 'https'
    var urlHost     = 'httpbin.org'
    //
    console.log('Hello World')
    // get anything
    var response = await fetch( 
        urlProtocal + '://' + urlHost + '/uuid',
        {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        }
    )
    if ( !response.ok) {
        throw new Error( response.statusText)
    }
    var jsonData = await response.json()
    console.log( 'Hello Rest API ' + jsonData.uuid)
})()