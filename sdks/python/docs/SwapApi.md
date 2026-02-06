# sipher_client.SwapApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_swap**](SwapApi.md#private_swap) | **POST** /v1/swap/private | Privacy-preserving token swap via Jupiter DEX


# **private_swap**
> PrivateSwap200Response private_swap(private_swap_request)

Privacy-preserving token swap via Jupiter DEX

Composite endpoint orchestrating stealth address generation, optional C-SPL wrapping, and Jupiter DEX swap into a single privacy-preserving token swap. Output is routed to a stealth address with Pedersen commitment. Supports ephemeral stealth addresses for agents without persistent meta-address.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.private_swap200_response import PrivateSwap200Response
from sipher_client.models.private_swap_request import PrivateSwapRequest
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
    api_instance = sipher_client.SwapApi(api_client)
    private_swap_request = sipher_client.PrivateSwapRequest() # PrivateSwapRequest | 

    try:
        # Privacy-preserving token swap via Jupiter DEX
        api_response = api_instance.private_swap(private_swap_request)
        print("The response of SwapApi->private_swap:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwapApi->private_swap: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **private_swap_request** | [**PrivateSwapRequest**](PrivateSwapRequest.md)|  | 

### Return type

[**PrivateSwap200Response**](PrivateSwap200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Private swap built successfully |  -  |
**400** | Validation error or unsupported token |  -  |
**500** | Swap orchestration failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

