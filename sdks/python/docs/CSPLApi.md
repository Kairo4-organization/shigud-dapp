# sipher_client.CSPLApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cspl_transfer**](CSPLApi.md#cspl_transfer) | **POST** /v1/cspl/transfer | Confidential token transfer
[**cspl_unwrap**](CSPLApi.md#cspl_unwrap) | **POST** /v1/cspl/unwrap | Unwrap confidential tokens back to SPL
[**cspl_wrap**](CSPLApi.md#cspl_wrap) | **POST** /v1/cspl/wrap | Wrap SPL tokens into confidential balance


# **cspl_transfer**
> CsplTransfer200Response cspl_transfer(cspl_transfer_request)

Confidential token transfer

Transfers confidential (C-SPL) tokens with hidden amount between accounts.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.cspl_transfer200_response import CsplTransfer200Response
from sipher_client.models.cspl_transfer_request import CsplTransferRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.CSPLApi(api_client)
    cspl_transfer_request = sipher_client.CsplTransferRequest() # CsplTransferRequest | 

    try:
        # Confidential token transfer
        api_response = api_instance.cspl_transfer(cspl_transfer_request)
        print("The response of CSPLApi->cspl_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CSPLApi->cspl_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cspl_transfer_request** | [**CsplTransferRequest**](CsplTransferRequest.md)|  | 

### Return type

[**CsplTransfer200Response**](CsplTransfer200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confidential transfer completed |  -  |
**400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cspl_unwrap**
> CsplUnwrap200Response cspl_unwrap(cspl_unwrap_request)

Unwrap confidential tokens back to SPL

Unwraps confidential (C-SPL) tokens back to standard SPL token balance.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.cspl_unwrap200_response import CsplUnwrap200Response
from sipher_client.models.cspl_unwrap_request import CsplUnwrapRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.CSPLApi(api_client)
    cspl_unwrap_request = sipher_client.CsplUnwrapRequest() # CsplUnwrapRequest | 

    try:
        # Unwrap confidential tokens back to SPL
        api_response = api_instance.cspl_unwrap(cspl_unwrap_request)
        print("The response of CSPLApi->cspl_unwrap:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CSPLApi->cspl_unwrap: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cspl_unwrap_request** | [**CsplUnwrapRequest**](CsplUnwrapRequest.md)|  | 

### Return type

[**CsplUnwrap200Response**](CsplUnwrap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tokens unwrapped |  -  |
**400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cspl_wrap**
> CsplWrap200Response cspl_wrap(cspl_wrap_request)

Wrap SPL tokens into confidential balance

Wraps standard SPL tokens into a confidential (C-SPL) balance with encrypted amounts.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.cspl_wrap200_response import CsplWrap200Response
from sipher_client.models.cspl_wrap_request import CsplWrapRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.CSPLApi(api_client)
    cspl_wrap_request = sipher_client.CsplWrapRequest() # CsplWrapRequest | 

    try:
        # Wrap SPL tokens into confidential balance
        api_response = api_instance.cspl_wrap(cspl_wrap_request)
        print("The response of CSPLApi->cspl_wrap:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CSPLApi->cspl_wrap: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cspl_wrap_request** | [**CsplWrapRequest**](CsplWrapRequest.md)|  | 

### Return type

[**CsplWrap200Response**](CsplWrap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tokens wrapped into confidential balance |  -  |
**400** | Validation or operation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

