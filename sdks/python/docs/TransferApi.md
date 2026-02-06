# sipher_client.TransferApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transfer_claim**](TransferApi.md#transfer_claim) | **POST** /v1/transfer/claim | Claim stealth payment (signed)
[**transfer_private**](TransferApi.md#transfer_private) | **POST** /v1/transfer/private | Build unified private transfer (chain-agnostic)
[**transfer_shield**](TransferApi.md#transfer_shield) | **POST** /v1/transfer/shield | Build shielded transfer (unsigned)


# **transfer_claim**
> TransferClaim200Response transfer_claim(transfer_claim_request)

Claim stealth payment (signed)

Derives stealth private key, signs and submits claim transaction on-chain.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.transfer_claim200_response import TransferClaim200Response
from sipher_client.models.transfer_claim_request import TransferClaimRequest
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
    api_instance = sipher_client.TransferApi(api_client)
    transfer_claim_request = sipher_client.TransferClaimRequest() # TransferClaimRequest | 

    try:
        # Claim stealth payment (signed)
        api_response = api_instance.transfer_claim(transfer_claim_request)
        print("The response of TransferApi->transfer_claim:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_claim: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_claim_request** | [**TransferClaimRequest**](TransferClaimRequest.md)|  | 

### Return type

[**TransferClaim200Response**](TransferClaim200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Claim transaction submitted |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_private**
> TransferPrivate200Response transfer_private(transfer_private_request)

Build unified private transfer (chain-agnostic)

Builds a private transfer to a stealth address on any supported chain. Returns chain-specific transaction data (Solana unsigned tx, EVM tx descriptor, or NEAR action descriptors). Currently supports: solana, ethereum, polygon, arbitrum, optimism, base, near.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.transfer_private200_response import TransferPrivate200Response
from sipher_client.models.transfer_private_request import TransferPrivateRequest
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
    api_instance = sipher_client.TransferApi(api_client)
    transfer_private_request = sipher_client.TransferPrivateRequest() # TransferPrivateRequest | 

    try:
        # Build unified private transfer (chain-agnostic)
        api_response = api_instance.transfer_private(transfer_private_request)
        print("The response of TransferApi->transfer_private:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_private: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_private_request** | [**TransferPrivateRequest**](TransferPrivateRequest.md)|  | 

### Return type

[**TransferPrivate200Response**](TransferPrivate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Private transfer built successfully |  -  |
**400** | Validation error |  -  |
**422** | Chain not supported for transfers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfer_shield**
> TransferShield200Response transfer_shield(transfer_shield_request)

Build shielded transfer (unsigned)

Creates an unsigned Solana transaction sending to a stealth address with Pedersen commitment.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.transfer_shield200_response import TransferShield200Response
from sipher_client.models.transfer_shield_request import TransferShieldRequest
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
    api_instance = sipher_client.TransferApi(api_client)
    transfer_shield_request = sipher_client.TransferShieldRequest() # TransferShieldRequest | 

    try:
        # Build shielded transfer (unsigned)
        api_response = api_instance.transfer_shield(transfer_shield_request)
        print("The response of TransferApi->transfer_shield:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferApi->transfer_shield: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_shield_request** | [**TransferShieldRequest**](TransferShieldRequest.md)|  | 

### Return type

[**TransferShield200Response**](TransferShield200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unsigned transaction built |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

