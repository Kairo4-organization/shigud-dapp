# sipher_client.IncoApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compute_inco_ciphertexts**](IncoApi.md#compute_inco_ciphertexts) | **POST** /v1/inco/compute | Compute on encrypted data
[**decrypt_inco_result**](IncoApi.md#decrypt_inco_result) | **POST** /v1/inco/decrypt | Decrypt FHE computation result
[**encrypt_inco_value**](IncoApi.md#encrypt_inco_value) | **POST** /v1/inco/encrypt | Encrypt value with FHE


# **compute_inco_ciphertexts**
> ComputeIncoCiphertexts200Response compute_inco_ciphertexts(compute_inco_ciphertexts_request)

Compute on encrypted data

Perform a homomorphic operation on FHE ciphertexts. Operations complete synchronously. Tracks noise budget consumption.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.compute_inco_ciphertexts200_response import ComputeIncoCiphertexts200Response
from sipher_client.models.compute_inco_ciphertexts_request import ComputeIncoCiphertextsRequest
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
    api_instance = sipher_client.IncoApi(api_client)
    compute_inco_ciphertexts_request = sipher_client.ComputeIncoCiphertextsRequest() # ComputeIncoCiphertextsRequest | 

    try:
        # Compute on encrypted data
        api_response = api_instance.compute_inco_ciphertexts(compute_inco_ciphertexts_request)
        print("The response of IncoApi->compute_inco_ciphertexts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncoApi->compute_inco_ciphertexts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compute_inco_ciphertexts_request** | [**ComputeIncoCiphertextsRequest**](ComputeIncoCiphertextsRequest.md)|  | 

### Return type

[**ComputeIncoCiphertexts200Response**](ComputeIncoCiphertexts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Computation completed |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decrypt_inco_result**
> DecryptIncoResult200Response decrypt_inco_result(decrypt_inco_result_request)

Decrypt FHE computation result

Decrypt the output of a completed FHE computation. Returns the plaintext result.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.decrypt_inco_result200_response import DecryptIncoResult200Response
from sipher_client.models.decrypt_inco_result_request import DecryptIncoResultRequest
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
    api_instance = sipher_client.IncoApi(api_client)
    decrypt_inco_result_request = sipher_client.DecryptIncoResultRequest() # DecryptIncoResultRequest | 

    try:
        # Decrypt FHE computation result
        api_response = api_instance.decrypt_inco_result(decrypt_inco_result_request)
        print("The response of IncoApi->decrypt_inco_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncoApi->decrypt_inco_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decrypt_inco_result_request** | [**DecryptIncoResultRequest**](DecryptIncoResultRequest.md)|  | 

### Return type

[**DecryptIncoResult200Response**](DecryptIncoResult200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Decryption result |  -  |
**400** | Decrypt failed or invalid computation ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **encrypt_inco_value**
> EncryptIncoValue200Response encrypt_inco_value(encrypt_inco_value_request)

Encrypt value with FHE

Encrypt a plaintext value using Fully Homomorphic Encryption (FHEW or TFHE scheme). Returns ciphertext and noise budget.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.encrypt_inco_value200_response import EncryptIncoValue200Response
from sipher_client.models.encrypt_inco_value_request import EncryptIncoValueRequest
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
    api_instance = sipher_client.IncoApi(api_client)
    encrypt_inco_value_request = sipher_client.EncryptIncoValueRequest() # EncryptIncoValueRequest | 

    try:
        # Encrypt value with FHE
        api_response = api_instance.encrypt_inco_value(encrypt_inco_value_request)
        print("The response of IncoApi->encrypt_inco_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncoApi->encrypt_inco_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encrypt_inco_value_request** | [**EncryptIncoValueRequest**](EncryptIncoValueRequest.md)|  | 

### Return type

[**EncryptIncoValue200Response**](EncryptIncoValue200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Value encrypted successfully |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

