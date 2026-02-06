# sipher_client.ViewingKeyApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewing_key_decrypt**](ViewingKeyApi.md#viewing_key_decrypt) | **POST** /v1/viewing-key/decrypt | Decrypt transaction with viewing key
[**viewing_key_derive**](ViewingKeyApi.md#viewing_key_derive) | **POST** /v1/viewing-key/derive | Derive child viewing key (BIP32-style)
[**viewing_key_disclose**](ViewingKeyApi.md#viewing_key_disclose) | **POST** /v1/viewing-key/disclose | Encrypt transaction for disclosure
[**viewing_key_generate**](ViewingKeyApi.md#viewing_key_generate) | **POST** /v1/viewing-key/generate | Generate viewing key
[**viewing_key_verify_hierarchy**](ViewingKeyApi.md#viewing_key_verify_hierarchy) | **POST** /v1/viewing-key/verify-hierarchy | Verify viewing key parent-child relationship


# **viewing_key_decrypt**
> ViewingKeyDecrypt200Response viewing_key_decrypt(viewing_key_decrypt_request)

Decrypt transaction with viewing key

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.viewing_key_decrypt200_response import ViewingKeyDecrypt200Response
from sipher_client.models.viewing_key_decrypt_request import ViewingKeyDecryptRequest
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
    api_instance = sipher_client.ViewingKeyApi(api_client)
    viewing_key_decrypt_request = sipher_client.ViewingKeyDecryptRequest() # ViewingKeyDecryptRequest | 

    try:
        # Decrypt transaction with viewing key
        api_response = api_instance.viewing_key_decrypt(viewing_key_decrypt_request)
        print("The response of ViewingKeyApi->viewing_key_decrypt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewingKeyApi->viewing_key_decrypt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewing_key_decrypt_request** | [**ViewingKeyDecryptRequest**](ViewingKeyDecryptRequest.md)|  | 

### Return type

[**ViewingKeyDecrypt200Response**](ViewingKeyDecrypt200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Decrypted transaction data |  -  |
**400** | Validation error |  -  |
**500** | Decryption failed (key mismatch) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewing_key_derive**
> ViewingKeyDerive200Response viewing_key_derive(viewing_key_derive_request)

Derive child viewing key (BIP32-style)

Derives a child viewing key from a master key using HMAC-SHA512. Supports hierarchical key trees for scoped compliance access (per-auditor, per-timeframe).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.viewing_key_derive200_response import ViewingKeyDerive200Response
from sipher_client.models.viewing_key_derive_request import ViewingKeyDeriveRequest
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
    api_instance = sipher_client.ViewingKeyApi(api_client)
    viewing_key_derive_request = sipher_client.ViewingKeyDeriveRequest() # ViewingKeyDeriveRequest | 

    try:
        # Derive child viewing key (BIP32-style)
        api_response = api_instance.viewing_key_derive(viewing_key_derive_request)
        print("The response of ViewingKeyApi->viewing_key_derive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewingKeyApi->viewing_key_derive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewing_key_derive_request** | [**ViewingKeyDeriveRequest**](ViewingKeyDeriveRequest.md)|  | 

### Return type

[**ViewingKeyDerive200Response**](ViewingKeyDerive200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Derived child viewing key |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewing_key_disclose**
> ViewingKeyDisclose200Response viewing_key_disclose(viewing_key_disclose_request)

Encrypt transaction for disclosure

Encrypts transaction data so only the viewing key holder can decrypt it (selective compliance).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.viewing_key_disclose200_response import ViewingKeyDisclose200Response
from sipher_client.models.viewing_key_disclose_request import ViewingKeyDiscloseRequest
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
    api_instance = sipher_client.ViewingKeyApi(api_client)
    viewing_key_disclose_request = sipher_client.ViewingKeyDiscloseRequest() # ViewingKeyDiscloseRequest | 

    try:
        # Encrypt transaction for disclosure
        api_response = api_instance.viewing_key_disclose(viewing_key_disclose_request)
        print("The response of ViewingKeyApi->viewing_key_disclose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewingKeyApi->viewing_key_disclose: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewing_key_disclose_request** | [**ViewingKeyDiscloseRequest**](ViewingKeyDiscloseRequest.md)|  | 

### Return type

[**ViewingKeyDisclose200Response**](ViewingKeyDisclose200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Encrypted disclosure |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewing_key_generate**
> ViewingKeyGenerate200Response viewing_key_generate(viewing_key_generate_request)

Generate viewing key

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.viewing_key_generate200_response import ViewingKeyGenerate200Response
from sipher_client.models.viewing_key_generate_request import ViewingKeyGenerateRequest
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
    api_instance = sipher_client.ViewingKeyApi(api_client)
    viewing_key_generate_request = sipher_client.ViewingKeyGenerateRequest() # ViewingKeyGenerateRequest | 

    try:
        # Generate viewing key
        api_response = api_instance.viewing_key_generate(viewing_key_generate_request)
        print("The response of ViewingKeyApi->viewing_key_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewingKeyApi->viewing_key_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewing_key_generate_request** | [**ViewingKeyGenerateRequest**](ViewingKeyGenerateRequest.md)|  | 

### Return type

[**ViewingKeyGenerate200Response**](ViewingKeyGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Viewing key generated |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewing_key_verify_hierarchy**
> ViewingKeyVerifyHierarchy200Response viewing_key_verify_hierarchy(viewing_key_verify_hierarchy_request)

Verify viewing key parent-child relationship

Verifies that a child viewing key was derived from a specific parent key at a given path.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.viewing_key_verify_hierarchy200_response import ViewingKeyVerifyHierarchy200Response
from sipher_client.models.viewing_key_verify_hierarchy_request import ViewingKeyVerifyHierarchyRequest
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
    api_instance = sipher_client.ViewingKeyApi(api_client)
    viewing_key_verify_hierarchy_request = sipher_client.ViewingKeyVerifyHierarchyRequest() # ViewingKeyVerifyHierarchyRequest | 

    try:
        # Verify viewing key parent-child relationship
        api_response = api_instance.viewing_key_verify_hierarchy(viewing_key_verify_hierarchy_request)
        print("The response of ViewingKeyApi->viewing_key_verify_hierarchy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewingKeyApi->viewing_key_verify_hierarchy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewing_key_verify_hierarchy_request** | [**ViewingKeyVerifyHierarchyRequest**](ViewingKeyVerifyHierarchyRequest.md)|  | 

### Return type

[**ViewingKeyVerifyHierarchy200Response**](ViewingKeyVerifyHierarchy200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hierarchy verification result |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

